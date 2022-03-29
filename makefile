all:
	git add .
	git commit -a --allow-empty-message -m ''
	git push -u origin main -f
req:
	pip freeze > requirements.txt
procfile:
	echo "web: gunicorn app:app" > Procfile
run:
	python app.py