import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";

const blogPosts: { [key: string]: any } = {
  "1": {
    title: "Building Scalable iOS Apps with SwiftUI and Combine",
    category: "iOS Development",
    readTime: "8 min read",
    date: "2024-01-15",
    content: `
# Building Scalable iOS Apps with SwiftUI and Combine

SwiftUI and Combine have revolutionized iOS development, providing developers with powerful tools to create reactive, maintainable applications. In this comprehensive guide, we'll explore best practices for building scalable iOS apps using these modern frameworks.

## The Power of Declarative UI

SwiftUI's declarative approach allows us to describe what our UI should look like, rather than how to achieve it. This paradigm shift leads to more predictable and testable code.

\`\`\`swift
struct ContentView: View {
    @StateObject private var viewModel = ContentViewModel()
    
    var body: some View {
        NavigationView {
            List(viewModel.items) { item in
                ItemRow(item: item)
            }
            .navigationTitle("Items")
            .onAppear {
                viewModel.loadItems()
            }
        }
    }
}
\`\`\`

## Reactive Programming with Combine

Combine enables us to handle asynchronous events and data flow in a declarative manner. By leveraging publishers and subscribers, we can create robust data pipelines.

\`\`\`swift
class ContentViewModel: ObservableObject {
    @Published var items: [Item] = []
    @Published var isLoading = false
    
    private let apiService = APIService()
    private var cancellables = Set<AnyCancellable>()
    
    func loadItems() {
        isLoading = true
        
        apiService.fetchItems()
            .receive(on: DispatchQueue.main)
            .sink(
                receiveCompletion: { completion in
                    self.isLoading = false
                },
                receiveValue: { items in
                    self.items = items
                }
            )
            .store(in: &cancellables)
    }
}
\`\`\`

## Architecture Patterns

For scalable applications, consider implementing MVVM (Model-View-ViewModel) architecture:

1. **Models**: Define your data structures
2. **Views**: SwiftUI views that observe ViewModels
3. **ViewModels**: Handle business logic and state management

## Best Practices

- Use \`@StateObject\` for object creation
- Leverage \`@ObservedObject\` for data flow
- Implement proper error handling
- Write comprehensive unit tests
- Follow Swift naming conventions

## Conclusion

SwiftUI and Combine provide a powerful foundation for building modern iOS applications. By following these patterns and best practices, you can create scalable, maintainable apps that provide excellent user experiences.
    `
  },
  "2": {
    title: "Machine Learning in Production: Best Practices",
    category: "Machine Learning", 
    readTime: "12 min read",
    date: "2024-01-10",
    content: `
# Machine Learning in Production: Best Practices

Deploying machine learning models to production environments presents unique challenges. This guide covers essential practices for successful ML deployment and maintenance.

## Model Versioning and Management

Implement robust versioning strategies for your models:

\`\`\`python
import mlflow
import joblib

# Log model with MLflow
with mlflow.start_run():
    mlflow.log_param("n_estimators", 100)
    mlflow.log_metric("accuracy", accuracy_score)
    mlflow.sklearn.log_model(model, "model")
\`\`\`

## Monitoring and Observability

Set up comprehensive monitoring for:
- Model performance metrics
- Data drift detection  
- System resource utilization
- Error rates and latency

## Continuous Integration/Deployment

Establish CI/CD pipelines for ML:
1. Automated testing of model code
2. Data validation checks
3. Model performance benchmarks
4. Staged deployment strategies

## Conclusion

Successful ML in production requires careful planning, robust infrastructure, and continuous monitoring. These practices ensure reliable, scalable ML systems.
    `
  }
};

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts[id || ""];

  if (!post) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Blog</span>
        </Link>

        {/* Article Header */}
        <Card className="bg-card neon-border mb-8 animate-fade-in">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary" className="neon-border-purple">
                {post.category}
              </Badge>
              <Button variant="outline" size="sm" className="neon-border">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Article Content */}
        <Card className="bg-card neon-border animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <CardContent className="p-8">
            <div className="prose prose-invert max-w-none">
              <div 
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: post.content.replace(/\n/g, '<br />').replace(/```[\s\S]*?```/g, (match) => {
                    return `<pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>${match.replace(/```\w*\n?/, '').replace(/```$/, '')}</code></pre>`;
                  })
                }}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}