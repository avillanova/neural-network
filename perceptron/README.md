The Perceptron Algorithm with Supervised Learning:
Exercises:
1 - For every input, multiply that input by its weight (x⁰*W⁰) (X¹*W¹)
2 - Sum all of the weighted inputs (x⁰*W⁰)+(X¹*W¹)
3 - Compute the output of the perceptron based on that sum passed through and activation function (the sign of the sum)
	If >=0 return 1
	Else
		return -1
4 - Match with the error table Error = answer - guess
	|Answer	|Guess	|Error	|
	|-1		|-1		|0		|
	|-1		|+1		|-2		|
	|+1		|-1		|+2		|
	|+1		|+1		|0		|
5 - Find the better weight W = W⁰+ΔW⁰
6 - ΔW⁰ = error*input, input is the x⁰
7 - Adjust the learning rate (lr), this will helps to calculate the new Weight based in a percentage rate, so the refined formula is W = W⁰+ΔW⁰+lr


Perceptron Algorithm steps:
1 - Provide the perceptron with inputs for which there is a known answer
2 - Ask the perceptron to guess an answer
3 - Compute the error. (Did it get the answer right or wrong?)
4 - Adjust all the weights according to the error
5 - Return to step 1 and repeat
