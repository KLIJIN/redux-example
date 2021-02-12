import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux"
import { decreaseAction, increaseAction, removeAction, clearCartAction, getTotalsAction } from "../actions"

const CartContainer = ({ cart123, total, clearCart, decrease, increase, remove, getTotals }) => {

  useEffect(() => {
    getTotals()
  }, [cart123, getTotals])

  console.log("CartContainer", cart123)


  if (cart123.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart123.map(item => {
          return <CartItem key={item.id} {...item} decrease={decrease} increase={increase} remove={remove} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearCart} >    Clear Cart   </button>
      </footer>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    cart123: state.cart,
    total: state.total
  }
}

const mapDispatchToProps = dispatch => ({
  clearCart: () => {
    dispatch(clearCartAction())
  },
  decrease: (id, amount) => {
    dispatch(
      decreaseAction(id, amount)
    )
  },
  increase: (id, amount) => {
    dispatch(
      increaseAction(id, amount)
    )
  },
  remove: (id) => {
    dispatch(removeAction(id))
  },
  getTotals: () => {
    dispatch(getTotalsAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);