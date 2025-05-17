import numpy as np
from scipy.special import comb

# Example: Calculating combinations
n1 = 5
k1 = 2
result1 = comb(n1, k1)
print("Result:", result1)

# Example: Calculating binomial coefficients
n2 = 6
m2 = 3
binom_coeff = comb(n2, m2)
print("Binomial coefficient (C(n, m)):", binom_coeff)

# Example: Finding the sum of first n natural numbers using a loop
n3 = 10
sum_natural_numbers = sum(range(1, n3 + 1))
print("Sum of first", n3, "natural numbers is:", sum_natural_numbers)
