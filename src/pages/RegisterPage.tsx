import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  User, 
  Mail, 
  Phone, 
  Lock, 
  Eye, 
  EyeOff, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  Shield,
  Users,
  Star
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import { useAuthStore } from '../store/authStore';
import toast from 'react-hot-toast';

const registerSchema = z.object({
  firstName: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  lastName: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Teléfono debe tener al menos 10 dígitos'),
  password: z.string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .regex(/[A-Z]/, 'Debe contener al menos una letra mayúscula')
    .regex(/[a-z]/, 'Debe contener al menos una letra minúscula')
    .regex(/[0-9]/, 'Debe contener al menos un número')
    .regex(/[^A-Za-z0-9]/, 'Debe contener al menos un carácter especial'),
  confirmPassword: z.string(),
  userType: z.enum(['client', 'provider']),
  acceptTerms: z.boolean().refine(val => val === true, 'Debes aceptar los términos y condiciones'),
  acceptMarketing: z.boolean().optional()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

type RegisterFormData = z.infer<typeof registerSchema>;

export function RegisterPage() {
  const navigate = useNavigate();
  const { language, setUser } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const t = {
    es: {
      title: 'Crear Cuenta',
      subtitle: 'Únete a la comunidad de TrabajoPR y accede a profesionales verificados',
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      password: 'Contraseña',
      confirmPassword: 'Confirmar Contraseña',
      userType: 'Tipo de Usuario',
      client: 'Cliente - Busco servicios',
      provider: 'Proveedor - Ofrezco servicios',
      acceptTerms: 'Acepto los términos y condiciones',
      acceptMarketing: 'Quiero recibir ofertas y noticias por email',
      createAccount: 'Crear Cuenta',
      alreadyHaveAccount: '¿Ya tienes cuenta?',
      signIn: 'Iniciar Sesión',
      passwordRequirements: 'Requisitos de contraseña:',
      requirements: [
        'Al menos 8 caracteres',
        'Una letra mayúscula',
        'Una letra minúscula',
        'Un número',
        'Un carácter especial'
      ],
      benefits: {
        title: 'Beneficios de registrarte',
        items: [
          'Acceso a profesionales verificados',
          'Agenda servicios 24/7',
          'Pagos seguros y protegidos',
          'Soporte al cliente dedicado'
        ]
      },
      emailVerification: {
        title: '¡Cuenta creada exitosamente!',
        message: 'Hemos enviado un enlace de verificación a tu correo electrónico. Por favor revisa tu bandeja de entrada y haz clic en el enlace para activar tu cuenta.',
        resend: 'Reenviar email',
        goToLogin: 'Ir a iniciar sesión'
      },
      errors: {
        emailExists: 'Este email ya está registrado',
        phoneExists: 'Este teléfono ya está registrado',
        serverError: 'Error del servidor. Intenta de nuevo.'
      }
    },
    en: {
      title: 'Create Account',
      subtitle: 'Join the TrabajoPR community and access verified professionals',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      userType: 'User Type',
      client: 'Client - Looking for services',
      provider: 'Provider - Offering services',
      acceptTerms: 'I accept the terms and conditions',
      acceptMarketing: 'I want to receive offers and news by email',
      createAccount: 'Create Account',
      alreadyHaveAccount: 'Already have an account?',
      signIn: 'Sign In',
      passwordRequirements: 'Password requirements:',
      requirements: [
        'At least 8 characters',
        'One uppercase letter',
        'One lowercase letter',
        'One number',
        'One special character'
      ],
      benefits: {
        title: 'Benefits of registering',
        items: [
          'Access to verified professionals',
          'Schedule services 24/7',
          'Secure and protected payments',
          'Dedicated customer support'
        ]
      },
      emailVerification: {
        title: 'Account created successfully!',
        message: 'We have sent a verification link to your email. Please check your inbox and click the link to activate your account.',
        resend: 'Resend email',
        goToLogin: 'Go to sign in'
      },
      errors: {
        emailExists: 'This email is already registered',
        phoneExists: 'This phone is already registered',
        serverError: 'Server error. Please try again.'
      }
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange'
  });

  const password = watch('password');
  const userType = watch('userType');

  const checkPasswordRequirement = (requirement: string, value: string) => {
    switch (requirement) {
      case 'length':
        return value?.length >= 8;
      case 'uppercase':
        return /[A-Z]/.test(value || '');
      case 'lowercase':
        return /[a-z]/.test(value || '');
      case 'number':
        return /[0-9]/.test(value || '');
      case 'special':
        return /[^A-Za-z0-9]/.test(value || '');
      default:
        return false;
    }
  };

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful registration
      const newUser = {
        id: '1',
        email: data.email,
        phone: data.phone,
        firstName: data.firstName,
        lastName: data.lastName,
        role: data.userType as 'client' | 'provider',
        avatar: undefined,
        emailVerified: false,
        phoneVerified: false,
        createdAt: new Date().toISOString()
      };

      setUser(newUser);
      setEmailSent(true);
      toast.success(language === 'es' ? '¡Cuenta creada exitosamente!' : 'Account created successfully!');
      
    } catch (error) {
      toast.error(t[language].errors.serverError);
    } finally {
      setIsLoading(false);
    }
  };

  const resendEmail = async () => {
    try {
      // Simulate resend email API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success(language === 'es' ? 'Email reenviado' : 'Email resent');
    } catch (error) {
      toast.error(t[language].errors.serverError);
    }
  };

  if (emailSent) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <Card>
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t[language].emailVerification.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {t[language].emailVerification.message}
              </p>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={resendEmail}
                >
                  {t[language].emailVerification.resend}
                </Button>
                <Link to="/login">
                  <Button fullWidth>
                    {t[language].emailVerification.goToLogin}
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Form */}
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <Link to="/" className="flex items-center justify-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">T</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">TrabajoPR</span>
                </Link>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {t[language].title}
                </h2>
                <p className="text-gray-600">
                  {t[language].subtitle}
                </p>
              </div>

              <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                {/* User Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    {t[language].userType}
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    <label className="relative">
                      <input
                        type="radio"
                        value="client"
                        {...register('userType')}
                        className="sr-only"
                      />
                      <div className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        userType === 'client' 
                          ? 'border-primary-500 bg-primary-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <div className="flex items-center">
                          <User className="w-5 h-5 text-gray-600 mr-3" />
                          <span className="font-medium">{t[language].client}</span>
                        </div>
                      </div>
                    </label>
                    <label className="relative">
                      <input
                        type="radio"
                        value="provider"
                        {...register('userType')}
                        className="sr-only"
                      />
                      <div className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        userType === 'provider' 
                          ? 'border-primary-500 bg-primary-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <div className="flex items-center">
                          <Shield className="w-5 h-5 text-gray-600 mr-3" />
                          <span className="font-medium">{t[language].provider}</span>
                        </div>
                      </div>
                    </label>
                  </div>
                  {errors.userType && (
                    <p className="mt-1 text-sm text-red-600">{errors.userType.message}</p>
                  )}
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label={t[language].firstName}
                    {...register('firstName')}
                    error={errors.firstName?.message}
                    leftIcon={<User size={16} />}
                  />
                  <Input
                    label={t[language].lastName}
                    {...register('lastName')}
                    error={errors.lastName?.message}
                    leftIcon={<User size={16} />}
                  />
                </div>

                {/* Email */}
                <Input
                  label={t[language].email}
                  type="email"
                  {...register('email')}
                  error={errors.email?.message}
                  leftIcon={<Mail size={16} />}
                />

                {/* Phone */}
                <Input
                  label={t[language].phone}
                  type="tel"
                  {...register('phone')}
                  error={errors.phone?.message}
                  leftIcon={<Phone size={16} />}
                  placeholder="(787) 123-4567"
                />

                {/* Password */}
                <div>
                  <Input
                    label={t[language].password}
                    type={showPassword ? 'text' : 'password'}
                    {...register('password')}
                    error={errors.password?.message}
                    leftIcon={<Lock size={16} />}
                    rightIcon={
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    }
                  />
                  
                  {/* Password Requirements */}
                  {password && (
                    <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        {t[language].passwordRequirements}
                      </p>
                      <div className="space-y-1">
                        {[
                          { key: 'length', text: t[language].requirements[0] },
                          { key: 'uppercase', text: t[language].requirements[1] },
                          { key: 'lowercase', text: t[language].requirements[2] },
                          { key: 'number', text: t[language].requirements[3] },
                          { key: 'special', text: t[language].requirements[4] }
                        ].map(req => (
                          <div key={req.key} className="flex items-center gap-2">
                            {checkPasswordRequirement(req.key, password) ? (
                              <CheckCircle className="w-4 h-4 text-success" />
                            ) : (
                              <AlertCircle className="w-4 h-4 text-gray-400" />
                            )}
                            <span className={`text-sm ${
                              checkPasswordRequirement(req.key, password) 
                                ? 'text-success' 
                                : 'text-gray-600'
                            }`}>
                              {req.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <Input
                  label={t[language].confirmPassword}
                  type={showConfirmPassword ? 'text' : 'password'}
                  {...register('confirmPassword')}
                  error={errors.confirmPassword?.message}
                  leftIcon={<Lock size={16} />}
                  rightIcon={
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  }
                />

                {/* Terms and Marketing */}
                <div className="space-y-3">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      {...register('acceptTerms')}
                      className="mt-1 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm text-gray-700">
                      {t[language].acceptTerms}
                    </span>
                  </label>
                  {errors.acceptTerms && (
                    <p className="text-sm text-red-600">{errors.acceptTerms.message}</p>
                  )}
                  
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      {...register('acceptMarketing')}
                      className="mt-1 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm text-gray-700">
                      {t[language].acceptMarketing}
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  fullWidth
                  size="lg"
                  loading={isLoading}
                  disabled={!isValid}
                  rightIcon={<ArrowRight size={18} />}
                >
                  {t[language].createAccount}
                </Button>

                {/* Sign In Link */}
                <div className="text-center">
                  <span className="text-gray-600">{t[language].alreadyHaveAccount} </span>
                  <Link to="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                    {t[language].signIn}
                  </Link>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Benefits */}
        <div className="hidden lg:flex bg-gradient-to-br from-primary-500 to-secondary-600 text-white">
          <div className="flex items-center justify-center p-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-md"
            >
              <h3 className="text-3xl font-bold mb-8">
                {t[language].benefits.title}
              </h3>
              <div className="space-y-6">
                {t[language].benefits.items.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-6 bg-white/10 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <Users className="w-8 h-8" />
                  <div>
                    <div className="text-2xl font-bold">25,000+</div>
                    <div className="text-primary-100">Usuarios registrados</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Star className="w-8 h-8" />
                  <div>
                    <div className="text-2xl font-bold">4.9/5</div>
                    <div className="text-primary-100">Calificación promedio</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}