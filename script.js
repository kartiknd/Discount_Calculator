function calculateDiscount(event) {
    event.preventDefault(); // Prevent form submission

    const mrp = parseFloat(document.getElementById("mrp").value);
    const sellingPrice = parseFloat(document.getElementById("sellingPrice").value);
    const difference = parseFloat(document.getElementById("difference").value);
    const middleSize = parseFloat(document.getElementById("middleSize").value);

    if (isNaN(mrp) || isNaN(sellingPrice) || isNaN(difference) || isNaN(middleSize) ||
        mrp <= 0 || sellingPrice <= 0 || difference <= 0 || middleSize <= 0) {
        document.getElementById("results").innerHTML = "Please enter valid positive numbers.";
        return;
    }

    let resultsHTML = "<table><tr><th>Size</th><th>Selling Price</th><th>Discount (%)</th></tr>";
    
    // Calculate sizes and selling prices
    for (let i = -4; i <= 4; i++) {
        const currentSize = middleSize + (i * 2); // Size changes by 2
        const currentSellingPrice = sellingPrice + (i * difference);
        const discount = ((mrp - currentSellingPrice) / mrp) * 100;
        resultsHTML += `<tr><td>${currentSize}</td><td>₹${currentSellingPrice.toFixed(2)}</td><td>${discount.toFixed(2)}%</td></tr>`;
    }
    
    resultsHTML += "</table>";
    
    document.getElementById("results").innerHTML = resultsHTML;
}
