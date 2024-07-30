from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Sample product data
products = [
    {'id': 1, 'name': 'Apple iPhone 14 Pro Max', 'description': 'This is a great product...', 'price': 999, 'image': 'iphone.jpg'},
    {'id': 2, 'name': 'AirPods', 'description': 'This is a great product...', 'price': 199, 'image': 'airpods.jpg'},
    {'id': 3, 'name': 'AirPods Max', 'description': 'This is a great product...', 'price': 549, 'image': 'airpodsmax.jpg'},
    {'id': 4, 'name': 'MacBook Air 15"', 'description': 'This is a great product...', 'price': 1299, 'image': 'macbookair.jpg'}
]

cart = []

@app.route('/')
def home():
    return render_template('home.html', products=products)

@app.route('/product/<int:product_id>')
def product_detail(product_id):
    product = next((p for p in products if p['id'] == product_id), None)
    return render_template('product_detail.html', product=product)

@app.route('/add_to_cart/<int:product_id>')
def add_to_cart(product_id):
    product = next((p for p in products if p['id'] == product_id), None)
    if product:
        cart.append(product)
    return redirect(url_for('view_cart'))

@app.route('/cart')
def view_cart():
    total_price = sum(item['price'] for item in cart)
    return render_template('cart.html', cart=cart, total_price=total_price)

if __name__ == '__main__':
    app.run(debug=True)
