import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

/**
 * Reusable accessible form field used by the Contact form
 * and any future forms across the site.
 *
 * Props follow react-hook-form's `register` signature so it
 * can be passed directly as `register={register}` from a form.
 */
function FormField({
  id,
  label,
  type = 'text',
  placeholder,
  register,
  error,
  rows,
  required = false,
  autoComplete,
  inputMode,
  hint,
}) {
  const isTextarea = type === 'textarea';
  const InputTag = isTextarea ? 'textarea' : 'input';

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-xs font-bold text-[#6B7280] uppercase tracking-[0.12em] flex items-center gap-1"
      >
        {label}
        {required && <span className="text-[#8b00ff]">*</span>}
      </label>
      <InputTag
        id={id}
        type={isTextarea ? undefined : type}
        rows={isTextarea ? rows : undefined}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        {...register(id)}
        className={`w-full rounded-2xl border px-5 py-4 bg-[#F9F9FB] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition-all duration-300 resize-none ${
          error
            ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
            : 'border-[#E5E7EB] focus:border-[#8b00ff] focus:ring-2 focus:ring-[#8b00ff]/15 hover:border-[#8b00ff]/40'
        }`}
      />
      {hint && !error && (
        <p id={`${id}-hint`} className="text-xs text-[#9CA3AF]">
          {hint}
        </p>
      )}
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.2 }}
            className="text-xs font-medium text-red-600 flex items-center gap-1.5"
            role="alert"
          >
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            {error.message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FormField;
