import { MenuItem } from "@/types";

export const MOCK_MENU: MenuItem[] = [
  // --- KASHMIRI SPECIALTIES ---
  { id: '1', name: 'Mutton Rogan Josh', description: 'Tender mutton cooked in traditional Kashmiri spices and rich red gravy.', price: 450, category: 'Main Course', isVeg: false, bestseller: true, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800' },
  { id: '2', name: 'Gushtaba', description: 'Minced mutton balls cooked in a rich, flavorful yogurt gravy. A Wazwan classic.', price: 490, category: 'Main Course', isVeg: false, bestseller: true, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=800' },
  { id: '3', name: 'Chicken Kanty', description: 'Pan-fried marinated chicken tossed with onions, tomatoes, and green chilies.', price: 320, category: 'Starters', isVeg: false, bestseller: true, image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&q=80&w=800' },
  { id: '4', name: 'Kashmiri Pulao', description: 'Aromatic basmati rice cooked with saffron, dry fruits, and nuts.', price: 280, category: 'Main Course', isVeg: true, bestseller: false, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800' },
  { id: '5', name: 'Nadru Yakhni', description: 'Lotus stems cooked in a delicate, aromatic yogurt-based sauce.', price: 290, category: 'Main Course', isVeg: true, bestseller: false, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800' },
  { id: '6', name: 'Zafrani Kahwa', description: 'Traditional Kashmiri green tea infused with saffron, cardamom, and crushed almonds.', price: 80, category: 'Beverages', isVeg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&q=80&w=800' },
  
  // --- STARTERS & SNACKS ---
  { id: '7', name: 'Chicken Seekh Kebab', description: 'Juicy and flavorful seekh kebabs served with mint chutney.', price: 229, category: 'Starters', isVeg: false, bestseller: true, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800' },
  { id: '8', name: 'Paneer Tikka', description: 'Cubes of paneer marinated in spices and grilled in a tandoor.', price: 240, category: 'Starters', isVeg: true, bestseller: false, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800' },
  { id: '9', name: 'Crispy Chilli Potato', description: 'Fried potato fingers tossed in a spicy, sweet, and sticky sauce.', price: 180, category: 'Starters', isVeg: true, bestseller: false, image: 'https://images.unsplash.com/photo-1585692462413-568ebbaec404?auto=format&fit=crop&q=80&w=800' },
  { id: '10', name: 'Mutton Shami Kebab', description: 'Melt-in-mouth minced mutton patties blended with chana dal and spices.', price: 280, category: 'Starters', isVeg: false, bestseller: false, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800' },
  { id: '11', name: 'Veg Spring Rolls', description: 'Crispy fried rolls stuffed with julienned vegetables.', price: 150, category: 'Starters', isVeg: true, bestseller: false, image: 'https://images.unsplash.com/photo-1606525437679-03e62f6b8637?auto=format&fit=crop&q=80&w=800' },
  { id: '12', name: 'Chicken Lollipop', description: 'Spicy, deep-fried chicken wings served with hot garlic sauce.', price: 260, category: 'Starters', isVeg: false, bestseller: true, image: 'https://images.unsplash.com/photo-1569058242253-1df69ce8eb53?auto=format&fit=crop&q=80&w=800' },

  // --- FAST FOOD & PIZZA ---
  { id: '13', name: 'Paneer Pizza', description: 'Delicious pizza topped with paneer, capsicum, olives & mozzarella cheese.', price: 249, category: 'Fast Food', isVeg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800' },
  { id: '14', name: 'Classic Chicken Burger', description: 'Crispy fried chicken patty with fresh lettuce and mayo in a toasted bun.', price: 160, category: 'Fast Food', isVeg: false, bestseller: true, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800' },
  { id: '15', name: 'White Sauce Pasta', description: 'Creamy white sauce penne pasta with herbs and mixed veggies.', price: 199, category: 'Fast Food', isVeg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=800' },
  { id: '16', name: 'Spicy Chicken Wrap', description: 'Tortilla wrap filled with spicy chicken chunks, veggies, and mint mayo.', price: 180, category: 'Fast Food', isVeg: false, bestseller: false, image: 'https://images.unsplash.com/photo-1626804475297-4160aeae2114?auto=format&fit=crop&q=80&w=800' },
  { id: '17', name: 'Veggie Supreme Pizza', description: 'Loaded with mushrooms, bell peppers, onions, tomatoes, and black olives.', price: 280, category: 'Fast Food', isVeg: true, bestseller: false, image: 'https://images.unsplash.com/photo-1604381720451-3fea061a4b49?auto=format&fit=crop&q=80&w=800' },
  { id: '18', name: 'Cheesy Loaded Fries', description: 'Crispy french fries topped with melted cheese and jalapeños.', price: 140, category: 'Fast Food', isVeg: true, bestseller: false, image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&q=80&w=800' },
  { id: '19', name: 'Chicken Tikka Sandwich', description: 'Grilled sandwich stuffed with creamy chicken tikka filling.', price: 150, category: 'Fast Food', isVeg: false, bestseller: false, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800' },

  // --- MAIN COURSE (INDIAN & CHINESE) ---
  { id: '20', name: 'Butter Chicken', description: 'Tender chicken pieces simmered in a rich, creamy tomato gravy.', price: 380, category: 'Main Course', isVeg: false, bestseller: true, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800' },
  { id: '21', name: 'Paneer Butter Masala', description: 'Cottage cheese cubes in a slightly sweet and spicy creamy gravy.', price: 280, category: 'Main Course', isVeg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800' },
  { id: '22', name: 'Dal Makhani', description: 'Black lentils slow-cooked overnight with butter and cream.', price: 220, category: 'Main Course', isVeg: true, bestseller: false, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800' },
  { id: '23', name: 'Chicken Biryani', description: 'Fragrant basmati rice cooked with marinated chicken and whole spices.', price: 320, category: 'Main Course', isVeg: false, bestseller: true, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800' },
  { id: '24', name: 'Mutton Biryani', description: 'Dum-cooked basmati rice mixed with tender pieces of spiced mutton.', price: 420, category: 'Main Course', isVeg: false, bestseller: false, image: 'https://images.unsplash.com/photo-1589302168068-964664d93cb0?auto=format&fit=crop&q=80&w=800' },
  { id: '25', name: 'Veg Fried Rice', description: 'Wok-tossed rice with finely chopped fresh vegetables and soy sauce.', price: 180, category: 'Main Course', isVeg: true, bestseller: false, image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800' },
  { id: '26', name: 'Chilli Chicken Gravy', description: 'Diced chicken in a spicy soy and chili sauce with bell peppers.', price: 310, category: 'Main Course', isVeg: false, bestseller: false, image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=800' },
  { id: '27', name: 'Kadai Paneer', description: 'Paneer cooked with crushed coriander seeds, capsicum, and onions.', price: 270, category: 'Main Course', isVeg: true, bestseller: false, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&q=80&w=800' },

  // --- BREADS (INDIAN) ---
  { id: '28', name: 'Butter Naan', description: 'Soft, fluffy tandoor-baked flatbread glazed with butter.', price: 45, category: 'Breads', isVeg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800' },
  { id: '29', name: 'Garlic Naan', description: 'Tandoori bread infused with fresh minced garlic and coriander.', price: 55, category: 'Breads', isVeg: true, bestseller: false, image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800' },
  { id: '30', name: 'Tandoori Roti', description: 'Whole wheat flatbread baked in a traditional clay oven.', price: 20, category: 'Breads', isVeg: true, bestseller: false, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800' },
  { id: '31', name: 'Lachha Paratha', description: 'Multi-layered, flaky whole wheat bread cooked in the tandoor.', price: 50, category: 'Breads', isVeg: true, bestseller: false, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800' },

  // --- DESSERTS ---
  { id: '32', name: 'Kashmiri Phirni', description: 'Creamy semolina dessert set in clay pots, garnished with nuts.', price: 120, category: 'Desserts', isVeg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?auto=format&fit=crop&q=80&w=800' },
  { id: '33', name: 'Gulab Jamun (2 pcs)', description: 'Soft, melt-in-the-mouth milk solid dumplings in sugar syrup.', price: 80, category: 'Desserts', isVeg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800' },
  { id: '34', name: 'Sizzling Brownie', description: 'Warm chocolate brownie served on a hot sizzler plate with ice cream.', price: 220, category: 'Desserts', isVeg: true, bestseller: false, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800' },
  { id: '35', name: 'Rasmalai', description: 'Flattened chhena balls soaked in malai flavored with cardamom.', price: 110, category: 'Desserts', isVeg: true, bestseller: false, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800' },

  // --- BEVERAGES ---
  { id: '36', name: 'Mint Mojito', description: 'Refreshing mocktail with fresh mint, lime, and crushed ice.', price: 130, category: 'Beverages', isVeg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&q=80&w=800' },
  { id: '37', name: 'Cold Coffee with Ice Cream', description: 'Thick, creamy blended iced coffee topped with vanilla ice cream.', price: 160, category: 'Beverages', isVeg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800' },
  { id: '38', name: 'Fresh Lime Soda', description: 'Classic sweet or salted lime soda to beat the heat.', price: 90, category: 'Beverages', isVeg: true, bestseller: false, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800' },
  { id: '39', name: 'Mango Lassi', description: 'Rich, sweet, and creamy yogurt drink blended with mango pulp.', price: 110, category: 'Beverages', isVeg: true, bestseller: false, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800' },
  { id: '40', name: 'Masala Chai', description: 'Strong Indian tea brewed with aromatic spices and milk.', price: 40, category: 'Beverages', isVeg: true, bestseller: false, image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&q=80&w=800' },
];

export const MOCK_USER = {
  name: 'Haadi Ahmad',
  phone: '+91 7006 123456',
  location: 'Handwara, J&K',
  totalOrders: 12,
  favorites: 4,
  status: 'Loyal Customer'
};