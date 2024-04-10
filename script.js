// Función para cambiar el idioma
function changeLanguage(language, data) {
    document.getElementById('welcome-heading').textContent = data[language].heading;
    document.getElementById('welcome-paragraph').textContent = data[language].paragraph;

       // Cambiar el fondo según el idioma seleccionado
       switch(language) {
        case 'en':
            document.body.style.background = 'url(Imagenes/Inglaterra-1-e1579225431994.jpg) no-repeat center center fixed';
            break;
        case 'zh':
            document.body.style.background = 'url(Imagenes/china-1-e1569778567974.jpg) no-repeat center center fixed';
            break;
        case 'ar':
            document.body.style.background = 'url(Imagenes/himno-de-arabia-saudi-655x368.webp) no-repeat center center fixed';
            break;
        case 'es':
            document.body.style.background = 'url(Imagenes/españa-e1570587854254.jpg) no-repeat center center fixed';
            break;
        case 'hi':
            document.body.style.background = 'url(Imagenes/india-taj-mahal.jpg) no-repeat center center fixed';
            break;
        default:
            // En caso de un idioma no reconocido, usar un fondo predeterminado
            document.body.style.background = 'url(default_background.jpg) no-repeat center center fixed';
            break;
    }
}


// Cargar el archivo lang.json
fetch('lang.json')
    .then(response => response.json())
    .then(data => {
        // Asignar eventos a los botones después de cargar los datos
        document.getElementById('btn1').addEventListener('click', function() {
            changeLanguage('en', data);
        });
        document.getElementById('btn2').addEventListener('click', function() {
            changeLanguage('zh', data);
        });
        document.getElementById('btn3').addEventListener('click', function() {
            changeLanguage('ar', data);
        });
        document.getElementById('btn4').addEventListener('click', function() {
            changeLanguage('es', data);
        });
        document.getElementById('btn5').addEventListener('click', function() {
            changeLanguage('hi', data);
        });
    })
    .catch(error => console.error('Error loading language data:', error));