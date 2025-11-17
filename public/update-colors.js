// Script to update products with different images for color variations
// Run this in the browser console on the application page

async function updateProductsWithColorVariations() {
  // This will use the supabase instance from the app
  const { supabase } = await import('./src/lib/supabase.ts');
  
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
    console.log('Removing colors from Gorra Deportiva...');
    await supabase
      .from('products')
      .update({ available_colors: [] })
      .eq('name', 'Gorra Deportiva');

    console.log('Removing colors from Gorra Clásica...');
    await supabase
      .from('products')
      .update({ available_colors: [] })
      .eq('name', 'Gorra Clásica');

    console.log('Removing colors from Abrigo Largo...');
    await supabase
      .from('products')
      .update({ available_colors: [] })
      .eq('name', 'Abrigo Largo');

    console.log('All products updated successfully!');
    
    // Refresh the page to see changes
    window.location.reload();
    
  } catch (error) {
    console.error('Error updating products:', error);
  }
}

// Call the function
updateProductsWithColorVariations();