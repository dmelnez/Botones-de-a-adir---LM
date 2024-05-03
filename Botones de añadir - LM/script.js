// Apartado de las operativas de los botones que añaden el monto a la cesta - PAGINA DE PRODUCTOS

// Obtener referencia al elemento de total
const totalElement = document.getElementById('total');
const totalElementCesta = document.getElementById('total-cesta');

// Obtener el valor total del almacenamiento local
let total = parseInt(localStorage.getItem('total')) || 0;

// Función para actualizar el valor total en el almacenamiento local
const updateLocalStorageTotal = () => {
    localStorage.setItem('total', total);
};

// Funciones para actualizar el valor total en el DOM y en el almacenamiento local
const updateTotal = () => {
    totalElement.textContent = total;
    totalElementCesta.textContent = total;
    updateLocalStorageTotal();
};

// Funciones para sumar a la cesta
function EcoNatura(amount) {
    total += 130;
    updateTotal();
}

function TechGizmos(amount) {
    total += 155;
    updateTotal();
}

function HealthyLivingHub() {
    total += 129;
    updateTotal();
}

function TravelVoyagePro() {
    total += 199;
    updateTotal();
}

function ArtisanCrafters() {
    total += 89;
    updateTotal();
}

function FashionFusionHQ() {
    total += 89;
    updateTotal();
}

function MindfulMeditator() {
    total += 120;
    updateTotal();
}

function CulinaryCraftsmen() {
    total += 88;
    updateTotal();
}

function AdventureAwaitsTravel() {
    total += 75;
    updateTotal();
}

function FitnessFusionStudio() {
    total += 79;
    updateTotal();
}

function PetPalsParadise() {
    total += 55;
    updateTotal();
}

function CreativeSparkLab() {
    total += 190;
    updateTotal();
}

// Funciones de resta

// Funciones para restar de la cesta

function EcoNaturaRestar() {
    if (total >= 130) {
        total -= 130;
        updateTotal();
    }
}

function TechGizmosRestar() {
    if (total >= 155) {
        total -= 155;
       if (total < 0){
        total = 0;
        updateTotal();

      }
      
        updateTotal();
    }
}

function HealthyLivingHubRestar() {
    if (total >= 129) {
        total -= 129;
        if (total < 0){
          total = 0;
          updateTotal();
  
        }
        updateTotal();
    }
}

function TravelVoyageProRestar() {
    if (total >= 199) {
        total -= 199;
        if (total < 0){
          total = 0;
          updateTotal();
  
        }
        updateTotal();
    }
}

function ArtisanCraftersRestar() {
    if (total >= 89) {
        total -= 89;
        if (total < 0){
          total = 0;
          updateTotal();
  
        }
        updateTotal();
    }
}

function FashionFusionHQRestar() {
    if (total >= 89) {
        total -= 89;
        if (total < 0){
          total = 0;
          updateTotal();
  
        }
        updateTotal();
    }
}

function MindfulMeditatorRestar() {
    if (total >= 120) {
        total -= 120;
        if (total < 0){
          total = 0;
          updateTotal();
  
        }
        updateTotal();
    }
}

function CulinaryCraftsmenRestar() {
    if (total >= 88) {
        total -= 88;
        if (total < 0){
          total = 0;
          updateTotal();
  
        }
        updateTotal();
    }
}

function AdventureAwaitsTravelRestar() {
    if (total >= 75) {
        total -= 75;
        if (total < 0){
          total = 0;
          updateTotal();
  
        }
        updateTotal();
    }
}

function FitnessFusionStudioRestar() {
    if (total >= 79) {
        total -= 79;
        if (total < 0){
          total = 0;
          updateTotal();
  
        }
        updateTotal();
    }
}

function PetPalsParadiseRestar() {
    if (total >= 55) {
        total -= 55;
        if (total < 0){
          total = 0;
          updateTotal();
  
        }
        updateTotal();
    }
}

function CreativeSparkLabRestar() {
    if (total >= 190) {
        total -= 190;
        if (total < 0){
          total = 0;
          updateTotal();
  
        }
        updateTotal();
    }
}

// Agregar listeners a los botones
document.getElementById('EcoNatura').addEventListener('click', EcoNatura);
document.getElementById('TechGizmos').addEventListener('click', TechGizmos);
document.getElementById('HealthyLivingHub').addEventListener('click', HealthyLivingHub);
document.getElementById('TravelVoyagePro').addEventListener('click', TravelVoyagePro);
document.getElementById('ArtisanCrafters').addEventListener('click', ArtisanCrafters);
document.getElementById('FashionFusionHQ').addEventListener('click', FashionFusionHQ);
document.getElementById('MindfulMeditator').addEventListener('click', MindfulMeditator);
document.getElementById('CulinaryCraftsmen').addEventListener('click', CulinaryCraftsmen);
document.getElementById('AdventureAwaitsTravel').addEventListener('click', AdventureAwaitsTravel);
document.getElementById('FitnessFusionStudio').addEventListener('click', FitnessFusionStudio);
document.getElementById('PetPalsParadise').addEventListener('click', PetPalsParadise);
document.getElementById('CreativeSparkLab').addEventListener('click', CreativeSparkLab);


document.getElementById('EcoNaturaRestar').addEventListener('click', EcoNaturaRestar);
document.getElementById('TechGizmosRestar').addEventListener('click', TechGizmosRestar);
document.getElementById('HealthyLivingHubRestar').addEventListener('click', HealthyLivingHubRestar);
document.getElementById('TravelVoyageProRestar').addEventListener('click', TravelVoyageProRestar);
document.getElementById('ArtisanCraftersRestar').addEventListener('click', ArtisanCraftersRestar);
document.getElementById('FashionFusionHQRestar').addEventListener('click', FashionFusionHQRestar);
document.getElementById('MindfulMeditatorRestar').addEventListener('click', MindfulMeditatorRestar);
document.getElementById('CulinaryCraftsmenRestar').addEventListener('click', CulinaryCraftsmenRestar);
document.getElementById('AdventureAwaitsTravelRestar').addEventListener('click', AdventureAwaitsTravelRestar);
document.getElementById('FitnessFusionStudioRestar').addEventListener('click', FitnessFusionStudioRestar);
document.getElementById('PetPalsParadiseRestar').addEventListener('click', PetPalsParadiseRestar);
document.getElementById('CreativeSparkLabRestar').addEventListener('click', CreativeSparkLabRestar);
