import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      'Incorrect Credentials': 'Your credentials are incorrect, try again!! 😕',
      'SignUp': 'Registro',
    }
  },
  es: {
    translation: {
      // Common
      'Yes': 'Si',
      'Cancel': 'Cancelar',
      'Next': 'Siguiente',
      'Back': 'Anterior',
      'Description': 'Descripción',
      'Welcome to CareYou': 'Bienvenido a CareYou',
      'Available': 'Disponible',
      'Busy': 'Ocupado',
      'Absent': 'Ausente',
      'Take Care Of Your Health': 'Cuida tu salud',
      // Login

      'User Name': 'Nombre de usuario',
      'Password': 'Contraseña',
      'Forgot password?': '¿Olvidó su contraseña?',
      "Don't have an account?": '¿No está registrado?, Registrese!.',
      'Login': 'Iniciar Sesión',
      'Incorrect Credentials': 'Usuario o Contraseña incorrecta, Inténtelo de nuevo.',

      // SignUp
      'SignUp': 'Registro',
      'First Name': 'Nombre',
      'Last Name': 'Apellido',
      'Birth Date': 'Fecha de nacimiento',
      'Gender': 'Género',
      'Country': 'Nacionalidad',
      'Province': 'Provincia',
      'Postal Code': 'Código Postal',
      'Address Lines': 'Dirección',
      'Suffering': 'Síntoma/as',
      'ID Card': 'Cédula',
      'Email': 'Correo',
      'Finish': 'Terminado!' ,
      'You already have an account?': '¿Ya tienes una cuenta?, Inicia Sesión.',

      // Appointments
      "Today's Appointments": 'Citas de hoy.',
      'Appointments': 'Citas',

      // MedicalRecord
      'Medical Record': 'Historial Medico',
      'Would you like to find it faster?': '¿Te gustaría encontrarlo más rápido?',
      'Date': 'Fecha',
      'Result': 'Resultado',

      // Home
      'Good Morning': 'Buenos Dias',
      'Do you want to do a pre-diagnosis?': '¿Quieres hacer un pre-diagnostico?',
      'Search your symptoms': 'Busca tus síntomas',
      'Your selected symptoms': 'Síntomas seleccionados',
      'Start test': 'Iniciar test',
      'New test': 'Nuevo test',
      'You have already selected that symptom': 'Ya seleccionaste ese síntoma',

      // Not found
      'Page not found': 'Pagina no encontrada',
      'Go to Home': 'Ir al inicio',

      // Modals
      'Diagnosis Results': 'Resultados de diagnostico',
      'See details': 'Ver detalles',
      'Are you sure you want to delete this symptom?': '¿Estás seguro que quieres eliminar este síntoma?',

      // Menu
      'Logout': 'Cerrar Sesión',
      'Settings': 'Ajustes',
      'Home': 'Inicio'
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
