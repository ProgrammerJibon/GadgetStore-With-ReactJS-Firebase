# GadgetHeaven

Your go-to destination for the latest and greatest gadgets.

## Technologies Used

- **React** - Core library for building the UI
- **Context API** - For state management (Cart and Wishlist)
- **LocalStorage** - For persisting data across sessions
- **React Rating Stars** - For star ratings on product cards
- **React Router** - For navigation and route handling
- **Figma** - For design reference and layout

## Key Features

1. **Responsive Design** - Adapts to different screen sizes for a seamless experience.
2. **Structured Navigation** - Includes a Navbar with active route indicators and a footer on all pages.
3. **Product Categories** - Sidebar with gadgets categorized (e.g., phones, computers) for easy browsing.
4. **Product Details Page** - Shows product image, price, and specifications.
5. **Shopping Cart and Wishlist** - Add, remove, and sort items with data saved using Context API and LocalStorage.
6. **Dynamic Background Color** - Implemented different backgrounds for home and other pages.
7. **Modal for Purchase** - Displays a congratulatory modal on successful purchase without reloading.

## Additional Features

- **404 Error Page** - Custom page for non-existent routes.
- **Toast Notifications** - On adding items to the cart and wishlist.
- **Sorting** - Sort items in the cart by price in descending order.
- **Dynamic Page Titles** - Each page has a unique title and favicon.

## Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/my-username/GadgetHeaven.git
   cd GadgetHeaven
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Run the application**  
   ```bash
   npm start
   ```

## Instructions

- **Adding to Cart/Wishlist**: Click on the buttons available on each product's detail page.
- **Sorting Items**: Use the “Sort by Price” option in the cart to see items from high to low price.
- **Purchase Confirmation**: Click “Purchase” in the cart to view the modal, which resets the cart and redirects to the home page.
- **404 Page**: Accessed when entering an undefined URL path.

## Design Overview

The design follows a structured layout, including:
- **Homepage** - Features a banner and gadget cards based on the Figma design.
- **Categories** - Displayed in a sidebar for easy selection of products.
- **Dynamic Modal and Toasts** - User interactions are enhanced with real-time feedback.

## Future Improvements

- **Add Item Limit to Cart**: Prevent adding more than $1000 worth of items.
- **Wishlist Management**: Allow item removal and direct add-to-cart from the wishlist.
- **Statistics Page**: Display product price vs. name chart for better insights.
