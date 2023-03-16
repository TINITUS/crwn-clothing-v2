import { CartItemContainer, CartItemImage, CartItemDetails, CartItemName, CartItemQuantity } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, quantity } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImage src={`${imageUrl}`} alt={`$(name)`} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <CartItemQuantity>{quantity}</CartItemQuantity>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
