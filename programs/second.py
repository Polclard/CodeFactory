import math
import random
import os
from datetime import datetime


print("\t\t\t\tWelcome to catch the x")
arr=[['-','-','-','-','-','-','-','-','-','-'],
	 ['-','-','-','-','-','-','-','-','-','-'],
	 ['-','-','-','-','-','-','-','-','-','-'],
	 ['-','-','-','-','-','-','-','-','-','-'],
	 ['-','-','-','-','-','-','-','-','-','-'],
	 ['-','-','-','-','-','-','-','-','-','-'],
	 ['-','-','-','-','-','-','-','-','-','-'],
	 ['-','-','-','-','-','-','-','-','-','-'],
	 ['-','-','-','-','-','-','-','-','-','-'],
	 ['-','-','-','-','-','-','-','-','-','-'],
	]
row = 0 
column = 0
rowPlayer = 0
columnPlayer = 0
up = 0
down = 0
left = 0
right = 0
upA = 0
rightA = 0


def printArray(array):
	for i in range(0, len(arr)):
		print()
		for j in range(0,len(arr)):
			print(arr[i][j], end=" ")

def findPosition(upCom, downCom, leftCom, rightCom, row, column, rowPlayer, columnPlayer):

	upA = rowPlayer - row         # [0,0]
	rightA = columnPlayer - column# [7,8]

	if(upA < 0):
		downCom += abs(upA)
	if(upA > 0):
		upCom += abs(upA)
	if(rightA < 0):
		rightCom += abs(rightA)
	if(rightA > 0):
		leftCom += abs(rightA)


	print(f"\n\nUp: {upCom}\nDown: {downCom}\nLeft: {leftCom}\nRight: {rightCom}\n\n")

def randomInt(rowPlayer, columnPlayer):

	row = random.randint(0, len(arr)-1)
	column = random.randint(0, len(arr)-1)
	arr[row][column] = 'X'

	while((rowPlayer == row) or (columnPlayer == column)):
		rowPlayer = random.randint(0, len(arr)-1)
		columnPlayer = random.randint(0, len(arr)-1)
	

	findPosition(up, down, left, right, row, column,rowPlayer, columnPlayer)
	arr[rowPlayer][columnPlayer] = 'P'

randomInt(rowPlayer, columnPlayer)
printArray(arr)

