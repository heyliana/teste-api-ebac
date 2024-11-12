pipeline {
    agent any
    
    environment {
        PORT = '3000'
    }

    stages {
        stage('Repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/heyliana/teste-api-ebac.git'
            }
        }
        stage('Dependenvcias'){
            steps{
                sh 'npm install'
            }
        }
        stage('Iniciar localhost'){
            steps{
                sh 'npm start &'
            }
        }
        stage('Teste'){
            steps{
                sh 'NO_COLOR=1 npm run cy:run'
            }
        }
    }
}
