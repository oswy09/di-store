// Script para ejecutar en la consola del navegador
// Copia y pega todo este código en la consola del navegador (F12)

async function updateAllProductsWithColors() {
  console.log('🔄 Iniciando actualización de productos...');
  
  // Verificar que Supabase esté disponible
  if (!window.supabase) {
    console.error('❌ Supabase no está disponible. Asegúrate de estar en la página de la aplicación.');
    return;
  }

  const { supabase } = window;

  try {
    // Productos con sus respectivos colores e imágenes DIFERENTES
    const productsToUpdate = [
      {
        name: 'Buso Deportivo Premium',
        colors: [
          {"name": "Negro", "hex": "#000000", "image_url": "https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg"},
          {"name": "Azul", "hex": "#2563eb", "image_url": "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"},
          {"name": "Gris", "hex": "#6b7280", "image_url": "https://images.pexels.com/photos/1269808/pexels-photo-1269808.jpeg"}
        ]
      },
      {
        name: 'Abrigo Térmico',
        colors: [
          {"name": "Negro", "hex": "#1f2937", "image_url": "https://images.pexels.com/photos/1472380/pexels-photo-1472380.jpeg"},
          {"name": "Café", "hex": "#8b4513", "image_url": "https://images.pexels.com/photos/7679656/pexels-photo-7679656.jpeg"},
          {"name": "Verde", "hex": "#059669", "image_url": "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg"}
        ]
      },
      {
        name: 'Chaqueta Casual',
        colors: [
          {"name": "Azul", "hex": "#2563eb", "image_url": "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"},
          {"name": "Negro", "hex": "#111827", "image_url": "https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg"},
          {"name": "Marrón", "hex": "#92400e", "image_url": "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"}
        ]
      },
      {
        name: 'Buso Fit',
        colors: [
          {"name": "Rosa", "hex": "#ec4899", "image_url": "https://images.pexels.com/photos/7679885/pexels-photo-7679885.jpeg"},
          {"name": "Blanco", "hex": "#f9fafb", "image_url": "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg"},
          {"name": "Púrpura", "hex": "#7c3aed", "image_url": "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg"}
        ]
      },
      {
        name: 'Chaqueta Premium',
        colors: [
          {"name": "Negro", "hex": "#1f2937", "image_url": "https://images.pexels.com/photos/5710086/pexels-photo-5710086.jpeg"},
          {"name": "Beige", "hex": "#d2b48c", "image_url": "https://images.pexels.com/photos/7679656/pexels-photo-7679656.jpeg"},
          {"name": "Azul", "hex": "#1d4ed8", "image_url": "https://images.pexels.com/photos/1472380/pexels-photo-1472380.jpeg"}
        ]
      },
      {
        name: 'Abrigo Largo',
        colors: [
          {"name": "Gris", "hex": "#6b7280", "image_url": "https://images.pexels.com/photos/7679656/pexels-photo-7679656.jpeg"},
          {"name": "Negro", "hex": "#111827", "image_url": "https://images.pexels.com/photos/5710086/pexels-photo-5710086.jpeg"},
          {"name": "Camel", "hex": "#a16207", "image_url": "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"}
        ]
      },
      {
        name: 'Gorra Deportiva',
        colors: [
          {"name": "Negro", "hex": "#111827", "image_url": "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg"},
          {"name": "Azul", "hex": "#1e40af", "image_url": "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg"},
          {"name": "Rojo", "hex": "#dc2626", "image_url": "https://images.pexels.com/photos/1269808/pexels-photo-1269808.jpeg"}
        ]
      },
      {
        name: 'Gorra Clásica',
        colors: [
          {"name": "Rosa", "hex": "#f472b6", "image_url": "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg"},
          {"name": "Blanco", "hex": "#f9fafb", "image_url": "https://images.pexels.com/photos/7679885/pexels-photo-7679885.jpeg"},
          {"name": "Negro", "hex": "#1f2937", "image_url": "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg"}
        ]
      }
    ];

    // Actualizar cada producto
    for (let i = 0; i < productsToUpdate.length; i++) {
      const product = productsToUpdate[i];
      console.log(`🔄 Actualizando ${product.name}...`);
      
      const { data, error } = await supabase
        .from('products')
        .update({ available_colors: product.colors })
        .eq('name', product.name)
        .select();

      if (error) {
        console.error(`❌ Error actualizando ${product.name}:`, error);
      } else {
        console.log(`✅ ${product.name} actualizado correctamente`);
        console.log('📊 Colores agregados:', product.colors.length);
      }
    }

    console.log('🎉 ¡Todos los productos han sido actualizados!');
    console.log('🔄 Recargando página en 3 segundos...');
    
    // Recargar página después de 3 segundos
    setTimeout(() => {
      window.location.reload();
    }, 3000);

  } catch (error) {
    console.error('💥 Error general:', error);
  }
}

// Hacer la función disponible globalmente
window.updateAllProductsWithColors = updateAllProductsWithColors;

console.log('📋 Script cargado. Ejecuta: updateAllProductsWithColors()');