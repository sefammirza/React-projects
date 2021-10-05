import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
            <h3>Add new tranction</h3>
            <form>
                <div class='form-control'>
                    <label for='text'>Text</label>
                    <input type='text' id='text' placeholder="Enter text...."/>
                </div>
                <div class='form-control'>
                    <label for='amount'>Amount <br/>(negative-expense,positive-income)</label>
                    <input type="number" id="amount" placeholder="Enter amount..."/>
                </div>
                <button class="btn">Add transaction</button>
            </form>
        </div>
    )
}
