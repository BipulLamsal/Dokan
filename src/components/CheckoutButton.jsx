function CheckoutButton() {
  return (
    <>
      <div class="mt-6">
        <a
          href="#"
          class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Checkout
        </a>
      </div>
      <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
        <p>
          or
          <button
            type="button"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </p>
      </div>
    </>
  );
}
export default CheckoutButton;
