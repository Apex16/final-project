pipeline {
    agent any

    environment {
        IMAGE_NAME = "final-project:latest"
        CLUSTER_NAME = "devops-cluster"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                  docker build -t $IMAGE_NAME .
                '''
            }
        }

        stage('Load Image into KIND') {
            steps {
                sh '''
                  kind load docker-image $IMAGE_NAME --name $CLUSTER_NAME
                '''
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                  kubectl apply -f deployment.yaml
                  kubectl apply -f service.yaml
                '''
            }
        }
    }
}
