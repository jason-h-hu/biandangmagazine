import os
fs = os.listdir('.')
for i in range(len(fs)):
	f = fs[i]
	fileEnding = f[f.rfind("."):]
	if (len(fileEnding) > 3):
		print fileEnding
		os.rename(f, str(i+100) + fileEnding)
# [os.rename(f, f.replace('_', '-')) for f in os.listdir('.') if not f.startswith('.')]