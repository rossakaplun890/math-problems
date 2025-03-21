import numpy as np

# Define a function that calculates the sum of squares of all elements in a list
def sum_of_squares(numbers):
    # Use NumPy to calculate the sum of squares
    result = np.sum(numbers**2)
    
    return result
