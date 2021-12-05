up:
	docker-compose up -d
down:
	docker-compose down --remove-orphans
web:
	docker-compose exec web ash
app:
	docker-compose exec app bash
db:
	docker compose exec db bash
migrate:
	docker compose exec app php artisan migrate
fresh:
	docker compose exec app php artisan migrate:fresh --seed
seed:
	docker compose exec app php artisan db:seed
tinker:
	docker compose exec app php artisan tinker
test:
	docker compose exec app php artisan test
optimize:
	docker compose exec app php artisan optimize
optimize-clear:
	docker compose exec app php artisan optimize:clear
init:
	docker compose up -d --build
	docker compose exec app composer install
	docker compose exec app cp .env.example .env
	docker compose exec app php artisan key:generate
	docker compose exec app php artisan storage:link
	docker compose exec app chmod -R 777 storage bootstrap/cache
	@make fresh
remake:
	@make destroy
	@make init
destroy:
	docker compose down --rmi all --volumes --remove-orphans
destroy-volumes:
	docker compose down --volumes --remove-orphans