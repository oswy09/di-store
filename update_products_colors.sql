-- Update products with different images for each color to make the color selection more visible

-- Update Buso Deportivo Premium with different images per color
UPDATE products SET available_colors = '[
  {"name": "Negro", "hex": "#000000", "image_url": "https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg"},
  {"name": "Gris Oscuro", "hex": "#1a1a1a", "image_url": "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"},
  {"name": "Azul", "hex": "#2d4a87", "image_url": "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg"}
]'::jsonb WHERE name = 'Buso Deportivo Premium';

-- Update Abrigo Térmico with different images per color
UPDATE products SET available_colors = '[
  {"name": "Negro", "hex": "#1a1a1a", "image_url": "https://images.pexels.com/photos/1472380/pexels-photo-1472380.jpeg"},
  {"name": "Café", "hex": "#8b4513", "image_url": "https://images.pexels.com/photos/7679656/pexels-photo-7679656.jpeg"},
  {"name": "Gris", "hex": "#4a4a4a", "image_url": "https://images.pexels.com/photos/5710086/pexels-photo-5710086.jpeg"}
]'::jsonb WHERE name = 'Abrigo Térmico';

-- Update Chaqueta Casual with different images per color
UPDATE products SET available_colors = '[
  {"name": "Azul", "hex": "#2c3e50", "image_url": "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"},
  {"name": "Negro", "hex": "#000000", "image_url": "https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg"},
  {"name": "Verde", "hex": "#2d5016", "image_url": "https://images.pexels.com/photos/1472380/pexels-photo-1472380.jpeg"}
]'::jsonb WHERE name = 'Chaqueta Casual';

-- Update Buso Fit with different images per color
UPDATE products SET available_colors = '[
  {"name": "Rosa", "hex": "#ffc0cb", "image_url": "https://images.pexels.com/photos/7679885/pexels-photo-7679885.jpeg"},
  {"name": "Blanco", "hex": "#ffffff", "image_url": "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg"},
  {"name": "Negro", "hex": "#000000", "image_url": "https://images.pexels.com/photos/7679656/pexels-photo-7679656.jpeg"}
]'::jsonb WHERE name = 'Buso Fit';

-- Update Chaqueta Premium with different images per color
UPDATE products SET available_colors = '[
  {"name": "Negro", "hex": "#000000", "image_url": "https://images.pexels.com/photos/5710086/pexels-photo-5710086.jpeg"},
  {"name": "Café", "hex": "#8b4513", "image_url": "https://images.pexels.com/photos/7679656/pexels-photo-7679656.jpeg"},
  {"name": "Gris", "hex": "#696969", "image_url": "https://images.pexels.com/photos/1472380/pexels-photo-1472380.jpeg"}
]'::jsonb WHERE name = 'Chaqueta Premium';

-- Leave some products without color variations (like gorras) to test the filtering
UPDATE products SET available_colors = '[]'::jsonb WHERE name = 'Gorra Deportiva';
UPDATE products SET available_colors = '[]'::jsonb WHERE name = 'Gorra Clásica';

-- Remove color options from Abrigo Largo to test the filtering
UPDATE products SET available_colors = '[]'::jsonb WHERE name = 'Abrigo Largo';