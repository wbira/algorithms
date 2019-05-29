package program

func GetNthFib(n int) int {
	counter := 3
	lastTwo := []int { 0, 1 }
	for counter <= n {
		nextFib := lastTwo[0] + lastTwo[1]
		lastTwo[0] = lastTwo[1]
		lastTwo[1] = nextFib
		counter =  counter +1
	}

	if n > 1 {
		return lastTwo[1]
	} else {
		return lastTwo[0]
	}
}
