import React, { useState } from 'react';
import { ArrowLeft, Upload, FileCheck, ShieldAlert, CheckCircle2, AlertCircle, FileCode, Terminal } from 'lucide-react';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';

interface ProfileUploadPageProps {
  onNavigate: (path: string) => void;
}

export const ProfileUploadPage: React.FC<ProfileUploadPageProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [uploadResult, setUploadResult] = useState<{ success: boolean; filename?: string; error?: string } | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setUploadResult(null);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
      setUploadResult(null);
    }
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setUploadResult(null);

    const formData = new FormData();
    formData.append('avatar', file);

    const res = await api.uploadAvatar(formData);
    if (res.success) {
      setUploadResult({ success: true, filename: res.filename });
    } else {
      setUploadResult({ success: false, error: res.error || 'Upload failed' });
    }
    setLoading(false);
  };

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center space-y-4">
        <h2 className="text-2xl font-bold text-text-primary">Sign in required</h2>
        <button
          onClick={() => onNavigate('/login')}
          className="px-6 py-2.5 rounded-xl bg-lime-primary text-bg font-bold text-xs"
        >
          Sign in to Upload Avatar →
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Back Link */}
      <button
        onClick={() => onNavigate('/profile')}
        className="flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-lime-primary transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>BACK TO ACCOUNT</span>
      </button>

      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-lime-primary font-bold">MEDIA DISPATCH</span>
          <span className="h-px w-12 bg-surface-border" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-text-primary">
          UPLOAD AVATAR.
        </h1>
        <p className="text-sm text-text-secondary max-w-lg">
          Select or drop a file to personalize your authenticated storefront identity.
        </p>
      </div>

      {/* Upload Container */}
      <div className="p-8 sm:p-12 rounded-3xl bg-surface border border-surface-border space-y-8">
        <form onSubmit={handleUploadSubmit} className="space-y-6">
          {/* Drag & Drop Box */}
          <div
            onDragOver={e => { e.preventDefault(); setIsDragOver(true); }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={handleDrop}
            className={`relative p-10 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
              isDragOver
                ? 'border-lime-primary bg-lime-primary/5'
                : 'border-surface-border bg-surface-elevated/60 hover:border-surface-borderHover'
            }`}
          >
            <input
              type="file"
              name="avatar"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            />

            <div className="w-16 h-16 rounded-2xl bg-surface border border-surface-border flex items-center justify-center text-lime-primary mb-4 shadow-sm">
              <Upload className="w-8 h-8 stroke-1" />
            </div>

            <div className="space-y-1">
              <div className="text-sm font-bold text-text-primary">
                {file ? file.name : 'Choose a file or drag & drop it here'}
              </div>
              <p className="text-xs text-text-muted font-mono">
                {file
                  ? `${(file.size / 1024).toFixed(1)} KB · Ready for server dispatch`
                  : 'PNG, JPG, GIF or arbitrary file payload (Local Practical 7 endpoint)'}
              </p>
            </div>
          </div>

          {/* Upload Feedback */}
          {uploadResult && (
            <div
              className={`p-4 rounded-xl text-xs flex items-center gap-2 ${
                uploadResult.success
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                  : 'bg-red-500/10 border border-red-500/30 text-red-400'
              }`}
            >
              {uploadResult.success ? (
                <CheckCircle2 className="w-4 h-4 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 shrink-0" />
              )}
              <span>
                {uploadResult.success
                  ? `Upload accepted by server. Saved file: ${uploadResult.filename}`
                  : uploadResult.error}
              </span>
            </div>
          )}

          <button
            type="submit"
            disabled={!file || loading}
            className="w-full py-4 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-lime-secondary transition-all shadow-[0_0_24px_rgba(183,255,106,0.3)] disabled:opacity-50"
          >
            <Upload className="w-4 h-4" />
            <span>{loading ? 'Transmitting to server...' : 'Upload File to Node →'}</span>
          </button>
        </form>

        {/* Security Lab Context */}
        <div className="p-5 rounded-2xl bg-surface-elevated border border-surface-border space-y-2 text-xs font-mono text-text-muted">
          <div className="flex items-center gap-2 text-amber-400 font-bold">
            <ShieldAlert className="w-4 h-4" />
            <span>Practical 7: Unrestricted File Upload Demonstration</span>
          </div>
          <p className="text-text-secondary leading-relaxed">
            The target endpoint <code>POST /profile/upload</code> accepts arbitrary MIME types and file extensions without server-side validation or allow-listing. Intercept this request in Burp Suite to inspect the multipart boundary.
          </p>
        </div>
      </div>
    </div>
  );
};
