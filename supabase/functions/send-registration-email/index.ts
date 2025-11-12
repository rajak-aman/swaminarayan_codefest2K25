import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY") as string);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface RegistrationData {
  teamName: string;
  college: string;
  domain: string;
  leaderName: string;
  leaderEmail: string;
  leaderPhone: string;
  member2Name: string;
  member2Email: string;
  member2Phone: string;
  member3Name?: string;
  member3Email?: string;
  member3Phone?: string;
  member4Name?: string;
  member4Email?: string;
  member4Phone?: string;
  projectIdea: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: RegistrationData = await req.json();
    console.log("Processing registration email for:", data.leaderEmail);

    // Build team members list
    let teamMembersList = `
      <h3>Team Leader:</h3>
      <p><strong>${data.leaderName}</strong><br>
      Email: ${data.leaderEmail}<br>
      Phone: ${data.leaderPhone}</p>

      <h3>Member 2:</h3>
      <p><strong>${data.member2Name}</strong><br>
      Email: ${data.member2Email}<br>
      Phone: ${data.member2Phone}</p>
    `;

    if (data.member3Name) {
      teamMembersList += `
        <h3>Member 3:</h3>
        <p><strong>${data.member3Name}</strong><br>
        Email: ${data.member3Email}<br>
        Phone: ${data.member3Phone}</p>
      `;
    }

    if (data.member4Name) {
      teamMembersList += `
        <h3>Member 4:</h3>
        <p><strong>${data.member4Name}</strong><br>
        Email: ${data.member4Email}<br>
        Phone: ${data.member4Phone}</p>
      `;
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            h1 { margin: 0; font-size: 28px; }
            h2 { color: #667eea; margin-top: 0; }
            h3 { color: #555; margin-bottom: 8px; margin-top: 20px; }
            .info-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 Registration Confirmed!</h1>
            </div>
            <div class="content">
              <h2>Welcome to Code Fest 2K25!</h2>
              <p>Thank you for registering your team. We're excited to have you participate in this amazing hackathon!</p>
              
              <div class="info-box">
                <h3>Team Details:</h3>
                <p><strong>Team Name:</strong> ${data.teamName}<br>
                <strong>College:</strong> ${data.college}<br>
                <strong>Domain:</strong> ${data.domain}</p>
                
                ${teamMembersList}
                
                <h3>Project Idea:</h3>
                <p>${data.projectIdea}</p>
              </div>

              <p><strong>Next Steps:</strong></p>
              <ul>
                <li>Check your email regularly for updates and announcements</li>
                <li>Join our Discord/Slack channel for communication (link coming soon)</li>
                <li>Prepare your development environment</li>
                <li>Review the problem statements on our website</li>
              </ul>

              <p>If you have any questions, feel free to reach out to us at <a href="mailto:info@codefest.com">info@codefest.com</a></p>
              
              <div class="footer">
                <p><strong>Code Fest 2K25</strong><br>
                Shree Swaminarayan Institute Of Technology<br>
                SSIT Campus, Bhat, Gandhinagar</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailResponse = await resend.emails.send({
      from: "Code Fest 2K25 <onboarding@resend.dev>",
      to: [data.leaderEmail],
      subject: `Registration Confirmed - Team ${data.teamName} | Code Fest 2K25`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-registration-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
