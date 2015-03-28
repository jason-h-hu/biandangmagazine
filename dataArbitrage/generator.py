import json
import random

if __name__ == '__main__':
	myfile = open("data.json", 'w+')
	dates = []
	month = 1
	year = 2014
	cogs = 0.12
	price = 100.00
	while cogs - 100 < price:
		datum = {"cogs": cogs, "price": price, "date": str(month) + '-' + str(year)}
		dates.append(datum)
		month += 4
		if month > 12:
			month = 1
			year += 1

		if random.random() > 0.9:
			cogs -= random.random()
		else:
			cogs += random.random()

		if random.random() > 0.9:
			price += random.random()
		else:
			price -= random.random()
	# writer = json.writer(myfile)
	# writer.writeheader()
	myfile.write(json.dumps(dates))
	