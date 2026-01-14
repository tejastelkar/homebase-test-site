import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Contact Us
            </h1>
            <p className="mb-8 text-muted-foreground">
              We'd love to hear from you. Fill out the form below and our team will get back to you shortly.
            </p>
          </div>

          {/* 
            ===== ROWTHFUNNELS FORM EMBED CONTAINER =====
            Paste your RowthFunnels embed code (iframe or script) inside this div.
            The container is styled to accept external form embeds without breaking layout.
            Form submission and redirect will be controlled by RowthFunnels.
          */}
          <div 
            id="rowthfunnels-form-container"
            className="mx-auto min-h-[500px] max-w-2xl overflow-hidden rounded-lg border border-border bg-card p-4 shadow-sm"
          >
            {/* 
              PLACEHOLDER: External form embed goes here
              
              Example RowthFunnels embed code:
              <iframe src="your-form-url" width="100%" height="500" frameBorder="0"></iframe>
              
              OR
              
              <script src="your-embed-script.js"></script>
            */}
            <div className="flex h-[400px] flex-col items-center justify-center text-center">
              <div className="mb-4 rounded-lg border-2 border-dashed border-border p-8">
                <p className="mb-2 text-lg font-medium text-foreground">
                  RowthFunnels Form Embed Area
                </p>
                <p className="text-sm text-muted-foreground">
                  Replace this placeholder with your external form embed code.
                  <br />
                  The form will redirect to /thank-you upon submission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
