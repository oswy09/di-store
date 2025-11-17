/*
  # Update all products with 3 colors and different images
  
  This migration will give each product exactly 3 color variations with different images
  so users can see the image change when selecting different colors.
*/

-- Update all products with 3 colors and different images

-- Buso Deportivo Premium (Hombre)
UPDATE products SET available_colors = '[
  {"name": "Negro", "hex": "#000000", "image_url": "https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg"},
  {"name": "Azul", "hex": "#2563eb", "image_url": "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"},
  {"name": "Gris", "hex": "#6b7280", "image_url": "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg"}
]'::jsonb WHERE name = 'Buso Deportivo Premium';

-- Abrigo Térmico (Hombre)
UPDATE products SET available_colors = '[
  {"name": "Negro", "hex": "#1f2937", "image_url": "https://images.pexels.com/photos/1472380/pexels-photo-1472380.jpeg"},
  {"name": "Café", "hex": "#8b4513", "image_url": "https://images.pexels.com/photos/7679656/pexels-photo-7679656.jpeg"},
  {"name": "Verde", "hex": "#059669", "image_url": "https://images.pexels.com/photos/5710086/pexels-photo-5710086.jpeg"}
]'::jsonb WHERE name = 'Abrigo Térmico';

-- Chaqueta Casual (Hombre)
UPDATE products SET available_colors = '[
  {"name": "Azul", "hex": "#2563eb", "image_url": "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"},
  {"name": "Negro", "hex": "#111827", "image_url": "https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg"},
  {"name": "Marrón", "hex": "#92400e", "image_url": "https://images.pexels.com/photos/1472380/pexels-photo-1472380.jpeg"}
]'::jsonb WHERE name = 'Chaqueta Casual';

-- Buso Fit (Dama)
UPDATE products SET available_colors = '[
  {"name": "Rosa", "hex": "#ec4899", "image_url": "https://images.pexels.com/photos/7679885/pexels-photo-7679885.jpeg"},
  {"name": "Blanco", "hex": "#f9fafb", "image_url": "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg"},
  {"name": "Púrpura", "hex": "#7c3aed", "image_url": "https://images.pexels.com/photos/7679656/pexels-photo-7679656.jpeg"}
]'::jsonb WHERE name = 'Buso Fit';

-- Chaqueta Premium (Dama)
UPDATE products SET available_colors = '[
  {"name": "Negro", "hex": "#1f2937", "image_url": "https://images.pexels.com/photos/5710086/pexels-photo-5710086.jpeg"},
  {"name": "Beige", "hex": "#d2b48c", "image_url": "https://images.pexels.com/photos/7679656/pexels-photo-7679656.jpeg"},
  {"name": "Azul", "hex": "#1d4ed8", "image_url": "https://images.pexels.com/photos/1472380/pexels-photo-1472380.jpeg"}
]'::jsonb WHERE name = 'Chaqueta Premium';

-- Abrigo Largo (Dama)
UPDATE products SET available_colors = '[
  {"name": "Gris", "hex": "#6b7280", "image_url": "https://images.pexels.com/photos/7679656/pexels-photo-7679656.jpeg"},
  {"name": "Negro", "hex": "#111827", "image_url": "https://images.pexels.com/photos/5710086/pexels-photo-5710086.jpeg"},
  {"name": "Camel", "hex": "#a16207", "image_url": "https://images.pexels.com/photos/1472380/pexels-photo-1472380.jpeg"}
]'::jsonb WHERE name = 'Abrigo Largo';

-- Gorra Deportiva (Hombre)
UPDATE products SET available_colors = '[
  {"name": "Negro", "hex": "#111827", "image_url": "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg"},
  {"name": "Azul", "hex": "#1e40af", "image_url": "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg"},
  {"name": "Rojo", "hex": "#dc2626", "image_url": "https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg"}
]'::jsonb WHERE name = 'Gorra Deportiva';

-- Gorra Clásica (Dama)
UPDATE products SET available_colors = '[
  {"name": "Rosa", "hex": "#f472b6", "image_url": "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg"},
  {"name": "Blanco", "hex": "#f9fafb", "image_url": "https://images.pexels.com/photos/7679885/pexels-photo-7679885.jpeg"},
  {"name": "Negro", "hex": "#1f2937", "image_url": "https://images.pexels.com/photos/7679656/pexels-photo-7679656.jpeg"}
]'::jsonb WHERE name = 'Gorra Clásica';