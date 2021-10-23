@echo off

cmd /k docker-compose -f ../docker-compose.yml -p donet_docker up -d --renew-anon-volumes


exit