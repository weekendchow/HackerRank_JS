const onClick = (btn, fn) => btn.addEventListener('click', fn);

const elemInput = (btn, elem) => {
	onClick(btn, () => res.innerHTML += elem);
}

elemInput(btn0, '0')
elemInput(btn1, '1')
elemInput(btnSub, '-')
elemInput(btnSum, '+')
elemInput(btnMul, '*')
elemInput(btnDiv, '/')


const ops = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b,
    '*': (a,b) => a * b,
    '/': (a,b) => Math.floor(a / b),
}

onClick(btnClr, () => {
    res.innerHTML = ''
})

onClick(btnEql, () => {
   // split on word boundaries (e.g.between digits and symbols)
    const [elem1, operator, elem2] = res.innerHTML.split(/\b/);
    // use parseInt (base 2) to read string as binary integer
    const [n1, n2] = [parseInt(elem1, 2), parseInt(elem2, 2)];
    // perform the desired operation then convert result into a string (base 2)
    res.innerHTML = Number(ops[operator](n1,n2)).toString(2);
});
