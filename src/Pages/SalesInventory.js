import React from 'react'

const SalesInventory = () => {
  return (
     <>
    <h3>SALES EXECUTIVES</h3>
    <div className='container'>
        <span>+ADD SALES EXECUTIVE</span>

        <div className='table-row'>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>DOB</th>
                    <th>GENDER</th>
                    <th>EXPERIENCE(in years)</th>
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

export default SalesInventory