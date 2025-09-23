// آرایه‌ای از فاکتورها
const invoices = [
    {
        invoiceNumber: 'INV12345',
        date: '2023-10-01',
        totalAmount: '1,200,000 تومان',
        paymentStatus: 'پرداخت شده'
    },
    {
        invoiceNumber: 'INV12346',
        date: '2023-10-10',
        totalAmount: '850,000 تومان',
        paymentStatus: 'منتظر پرداخت'
    },
    {
        invoiceNumber: 'INV12347',
        date: '2023-10-15',
        totalAmount: '2,500,000 تومان',
        paymentStatus: 'پرداخت شده'
    }
];

// نمایش فاکتورها در جدول
document.getElementById('recent-bills-btn').addEventListener('click', function() {
    const invoiceList = document.getElementById('invoice-list');
    const invoiceTbody = document.getElementById('invoice-tbody');
    
    // نمایش بخش فاکتورها
    invoiceList.style.display = 'block';
    
    // پاک کردن محتوای قبلی جدول
    invoiceTbody.innerHTML = '';
    
    // پر کردن جدول با داده‌های فاکتورها
    invoices.forEach(invoice => {
        const row = document.createElement('tr');
        
        const invoiceNumberCell = document.createElement('td');
        invoiceNumberCell.textContent = invoice.invoiceNumber;
        
        const dateCell = document.createElement('td');
        dateCell.textContent = invoice.date;
        
        const totalAmountCell = document.createElement('td');
        totalAmountCell.textContent = invoice.totalAmount;
        
        const paymentStatusCell = document.createElement('td');
        paymentStatusCell.textContent = invoice.paymentStatus;
        
        // اضافه کردن سلول‌ها به ردیف
        row.appendChild(invoiceNumberCell);
        row.appendChild(dateCell);
        row.appendChild(totalAmountCell);
        row.appendChild(paymentStatusCell);
        
        // اضافه کردن ردیف به جدول
        invoiceTbody.appendChild(row);
    });
});


let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
});