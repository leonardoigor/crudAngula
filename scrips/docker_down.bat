@echo off

 
cmd /k docker compose -f docker-compose.yml -p donet_docker down --volumes --rmi all

exit