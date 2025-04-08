from sympy import symbols, solve

x = symbols('x')
equation = x**3 - 6*x**2 + 8*x
solution = solve(equation, x)
print(solution)
