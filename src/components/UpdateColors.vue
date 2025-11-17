<template>
  <div class="update-colors" v-if="showUpdateButton">
    <button @click="updateProducts" :disabled="updating">
      {{ updating ? 'Actualizando...' : 'Actualizar Colores de Productos' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '../lib/supabase';

const showUpdateButton = ref(true);
const updating = ref(false);

const updateProducts = async () => {
  updating.value = true;
  
  try {
    console.log('Updating Buso Deportivo Premium...');
    await supabase
      .from('products')
      .update({
        available_colors: [
          {"name": "Negro", "hex": "#000000", "image_url": "https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg"},
          {"name": "Gris Oscuro", "hex": "#1a1a1a", "image_url": "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"},
          {"name": "Azul", "hex": "#2d4a87", "image_url": "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg"}
        ]
      })
      .eq('name', 'Buso Deportivo Premium');

    console.log('Updating Abrigo Térmico...');
    await supabase
      .from('products')
      .update({
        available_colors: [
          {"name": "Negro", "hex": "#1a1a1a", "image_url": "https://images.pexels.com/photos/1472380/pexels-photo-1472380.jpeg"},
          {"name": "Café", "hex": "#8b4513", "image_url": "https://images.pexels.com/photos/7679656/pexels-photo-7679656.jpeg"},
          {"name": "Gris", "hex": "#4a4a4a", "image_url": "https://images.pexels.com/photos/5710086/pexels-photo-5710086.jpeg"}
        ]
      })
      .eq('name', 'Abrigo Térmico');

    console.log('Updating Chaqueta Casual...');
    await supabase
      .from('products')
      .update({
        available_colors: [
          {"name": "Azul", "hex": "#2c3e50", "image_url": "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"},
          {"name": "Negro", "hex": "#000000", "image_url": "https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg"},
          {"name": "Verde", "hex": "#2d5016", "image_url": "https://images.pexels.com/photos/1472380/pexels-photo-1472380.jpeg"}
        ]
      })
      .eq('name', 'Chaqueta Casual');

    console.log('Updating Buso Fit...');
    await supabase
      .from('products')
      .update({
        available_colors: [
          {"name": "Rosa", "hex": "#ffc0cb", "image_url": "https://images.pexels.com/photos/7679885/pexels-photo-7679885.jpeg"},
          {"name": "Blanco", "hex": "#ffffff", "image_url": "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg"},
          {"name": "Negro", "hex": "#000000", "image_url": "https://images.pexels.com/photos/7679656/pexels-photo-7679656.jpeg"}
        ]
      })
      .eq('name', 'Buso Fit');

    console.log('Updating Chaqueta Premium...');
    await supabase
      .from('products')
      .update({
        available_colors: [
          {"name": "Negro", "hex": "#000000", "image_url": "https://images.pexels.com/photos/5710086/pexels-photo-5710086.jpeg"},
          {"name": "Café", "hex": "#8b4513", "image_url": "https://images.pexels.com/photos/7679656/pexels-photo-7679656.jpeg"},
          {"name": "Gris", "hex": "#696969", "image_url": "https://images.pexels.com/photos/1472380/pexels-photo-1472380.jpeg"}
        ]
      })
      .eq('name', 'Chaqueta Premium');

    // Remove colors from products that shouldn't have color variations
    console.log('Removing colors from gorras...');
    await supabase
      .from('products')
      .update({ available_colors: [] })
      .in('name', ['Gorra Deportiva', 'Gorra Clásica', 'Abrigo Largo']);

    console.log('All products updated successfully!');
    showUpdateButton.value = false;
    
    // Emit event to parent to refresh products
    window.location.reload();
    
  } catch (error) {
    console.error('Error updating products:', error);
  } finally {
    updating.value = false;
  }
};
</script>

<style scoped>
.update-colors {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.update-colors button {
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.update-colors button:disabled {
  background: #6c757d;
  cursor: not-allowed;
}
</style>