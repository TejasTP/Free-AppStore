all:
	git add .
	git commit -a --allow-empty-message -m ' '
	git push -u origin main
req:
	pip freeze > requirements.txt
procfile:
	echo "web: gunicorn app:app" > Procfile