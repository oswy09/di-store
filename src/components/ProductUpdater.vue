<template>
  <div class="product-updater" v-if="showUpdater">
    <div class="update-progress">
      <div class="spinner"></div>
      <p>Configurando colores de productos...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabase';

const showUpdater = ref(true);

const updateAllProducts = async () => {
  try {
    // Definir imágenes completamente diferentes para cada color
    const imageUrls = [
      "https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg",
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg", 
      "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg",
      "https://images.pexels.com/photos/1472380/pexels-photo-1472380.jpeg",
      "https://images.pexels.com/photos/7679656/pexels-photo-7679656.jpeg",
      "https://images.pexels.com/photos/5710086/pexels-photo-5710086.jpeg",
      "https://images.pexels.com/photos/7679885/pexels-photo-7679885.jpeg",
      "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg",
      "https://images.pexels.com/photos/1269808/pexels-photo-1269808.jpeg",
      "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg",
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
      "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg"
    ];

    const updates = [
      {
        name: 'Buso Deportivo Premium',
        colors: [
          {"name": "Negro", "hex": "#000000", "image_url": imageUrls[0]},
          {"name": "Azul", "hex": "#2563eb", "image_url": imageUrls[1]},
          {"name": "Gris", "hex": "#6b7280", "image_url": imageUrls[2]}
        ]
      },
      {
        name: 'Abrigo Térmico',
        colors: [
          {"name": "Negro", "hex": "#1f2937", "image_url": imageUrls[3]},
          {"name": "Café", "hex": "#8b4513", "image_url": imageUrls[4]},
          {"name": "Verde", "hex": "#059669", "image_url": imageUrls[5]}
        ]
      },
      {
        name: 'Chaqueta Casual',
        colors: [
          {"name": "Azul", "hex": "#2563eb", "image_url": imageUrls[6]},
          {"name": "Negro", "hex": "#111827", "image_url": imageUrls[7]},
          {"name": "Marrón", "hex": "#92400e", "image_url": imageUrls[8]}
        ]
      },
      {
        name: 'Buso Fit',
        colors: [
          {"name": "Rosa", "hex": "#ec4899", "image_url": imageUrls[9]},
          {"name": "Blanco", "hex": "#f9fafb", "image_url": imageUrls[10]},
          {"name": "Púrpura", "hex": "#7c3aed", "image_url": imageUrls[11]}
        ]
      },
      {
        name: 'Chaqueta Premium',
        colors: [
          {"name": "Negro", "hex": "#1f2937", "image_url": imageUrls[0]},
          {"name": "Beige", "hex": "#d2b48c", "image_url": imageUrls[1]},
          {"name": "Azul", "hex": "#1d4ed8", "image_url": imageUrls[2]}
        ]
      },
      {
        name: 'Abrigo Largo',
        colors: [
          {"name": "Gris", "hex": "#6b7280", "image_url": imageUrls[3]},
          {"name": "Negro", "hex": "#111827", "image_url": imageUrls[4]},
          {"name": "Camel", "hex": "#a16207", "image_url": imageUrls[5]}
        ]
      },
      {
        name: 'Gorra Deportiva',
        colors: [
          {"name": "Negro", "hex": "#111827", "image_url": imageUrls[6]},
          {"name": "Azul", "hex": "#1e40af", "image_url": imageUrls[7]},
          {"name": "Rojo", "hex": "#dc2626", "image_url": imageUrls[8]}
        ]
      },
      {
        name: 'Gorra Clásica',
        colors: [
          {"name": "Rosa", "hex": "#f472b6", "image_url": imageUrls[9]},
          {"name": "Blanco", "hex": "#f9fafb", "image_url": imageUrls[10]},
          {"name": "Negro", "hex": "#1f2937", "image_url": imageUrls[11]}
        ]
      }
    ];

    // Actualizar cada producto
    for (const update of updates) {
      await supabase
        .from('products')
        .update({ available_colors: update.colors })
        .eq('name', update.name);
      
      console.log(`Updated ${update.name} with 3 colors`);
    }

    console.log('All products updated with colors!');
    
    // Ocultar el actualizador después de 2 segundos
    setTimeout(() => {
      showUpdater.value = false;
    }, 2000);

  } catch (error) {
    console.error('Error updating products:', error);
    showUpdater.value = false;
  }
};

onMounted(() => {
  // Ejecutar la actualización automáticamente
  updateAllProducts();
});
</script>

<style scoped>
.product-updater {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.update-progress {
  background: white;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.update-progress p {
  margin: 0;
  font-weight: bold;
  color: #333;
}
</style>