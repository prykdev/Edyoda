import React from 'react'

const Inventory = () => {
  return (
    <>
    <h3>Inventory</h3>
    <div className='container'>
        <span>+ADD NEW MEDICINE</span>

        <div className='table-row'>
            <table>
                <tr>
                    <th>Medicine Name</th>
                    <th>Manufacturer</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Discount(%)</th>
                </tr>
                <tr>
                    <div>name</div>
                    <div> manufacturer name</div>
                    <div>price</div>
                    <div>stock</div>
                    <div>5</div>
                    <div>
                        <button>edit</button>
                    </div>
                    <div>
                        <button>delete</button>
                    </div>
                </tr>
                <tr></tr>
            </table>
        </div>
    </div>
    </>
  )
}

export default Inventory