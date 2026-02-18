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
                  docker build -t final-project:latest .
                '''
            }
        }

        stage('Load Image into KIND') {
            steps {
                sh '''
                  kind load docker-image final-project:latest --name devops-cluster
                '''
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                  docker exec devops-cluster-control-plane \
                    kubectl apply -f /workspace/deployment.yaml

                  docker exec devops-cluster-control-plane \
                    kubectl apply -f /workspace/service.yaml
                '''
            }
        }
    }
}
