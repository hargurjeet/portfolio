import { NextRequest } from "next/server";

const KNOWLEDGE_BASE = `
HARGURJEET SINGH GANGER — CANDIDATE KNOWLEDGE BASE

CONTACT:
Full Name: Hargurjeet Singh Ganger
Email: gurjeet333@gmail.com
Location: Bangalore, India
LinkedIn: linkedin.com/in/hargurjeet/
GitHub: github.com/hargurjeet
Medium Blog: gurjeet333.medium.com

PROFESSIONAL SUMMARY:
Senior Data Scientist with 15+ years in the IT industry. Career evolved from IT systems analysis and testing to deep specialization in data science, ML, and Generative AI. Expert across the full ML lifecycle — data ingestion, feature engineering, model deployment, monitoring, and agentic AI system design. Recognized for hands-on work with LLMs, RAG architectures, multi-agent AI systems, and MLOps. Delivered AI solutions at scale for British Telecom (BT) and Royal Dutch Shell.

CAREER TIMELINE:
- May 2022–Present: Senior Data Scientist, British Telecom (BT) — 3+ years
- Sep 2016–May 2022: Data Scientist, Royal Dutch Shell — 5.7 years
- Dec 2010–Aug 2016: IT Analyst, Tata Consultancy Services (TCS) — 5.8 years
Total: 15+ years (9+ years in data science/ML, 3+ years in Generative AI)

CURRENT ROLE — BRITISH TELECOM (BT):
1. RAG Chatbot & Conversational AI: Architected and delivered an enterprise conversational AI system using LLMs and RAG. Reduced manual document extraction time by 70%. Scaled a multimodal pipeline via AWS Textract + OpenSearch to process 100K+ documents (PDFs, scans, images) with 90%+ accuracy and p50/p95/p99 latency tracking.
2. Agentic Workflows: Multi-step agentic pipelines using CrewAI and LangGraph, integrating JSON schema validation, retry loops, and custom guardrails to minimize hallucinations.
3. LLM Evaluation & Observability: Built an evaluation framework using Ragas and LLM-as-judge pipelines for faithfulness, bias, toxicity, and hallucination metrics. Set up Langfuse observability for token/latency tracing.
4. Email Intelligence & Automation: Built an end-to-end pipeline processing 6,000+ weekly escalation emails using AWS Lambda, Step Functions, and MS Graph API. Fine-tuned LLaMA-2 7B locally via QLoRA for a 40% F1-score improvement in field extraction.
5. Recommendation Systems: Multi-label classification models (Random Forest + XGBoost) increasing premium SD-WAN product sales by 10%. Implemented market basket analysis using Apriori algorithm increasing Value-Added Services (VAS) sales by 30%.

PREVIOUS ROLE — ROYAL DUTCH SHELL:
1. Predictive Maintenance: Built ML models (XGBoost, Random Forest) via SHAP-based interpretability and ROC-AUC scoring for refinery equipment, cutting maintenance costs by 30% and unplanned downtime by 25%.
2. Materials Delivery Forecasting: Designed data pipelines (Pandas, NumPy) and Power BI dashboards to forecast materials delivery across 5 geographies, yielding 10% budget savings in the first year.
3. Big Data & Analytics: 5+ years of experience with data warehousing, ETL, PySpark, SparkSQL, clustering, and statistical inference.

EARLY CAREER — TCS:
1. SIT & UAT Testing: Managed System Integration Testing and UAT to validate client PoS (Point of Sale) systems at enterprise scale. Spent one year onsite in the UK guiding offshore teams.
2. Domain Expertise: Worked extensively with card and payment systems, PCI standards, and ISO 8583 protocols.

KEY ACHIEVEMENTS:
- 70% reduction in manual data extraction time (BT RAG Chatbot)
- 90%+ document extraction accuracy on 100K+ files (BT)
- 40% F1-score improvement in email intelligence via local LLaMA-2 QLoRA fine-tuning (BT)
- 30% increase in Value-Added Services sales using Apriori model (BT)
- 10% increase in premium SD-WAN product sales (BT)
- 30% reduction in equipment maintenance costs (Shell ML)
- 25% reduction in unplanned equipment downtime (Shell)
- 10% budget savings from materials delivery forecasting (Shell)

TECHNICAL SKILLS:
Generative AI & LLMs: Vector Databases, RAG design patterns, Prompt Engineering, Guardrails, PII Filtering, LLM Fine-tuning, Agentic Workflows, LLM Observability, MCP. OpenAI, Anthropic, and Gemini APIs.
LLM Frameworks: LangChain, LangGraph, CrewAI.
ML: Regression, statistical inference, ensemble methods (Random Forest, XGBoost, Gradient Boosting), feature engineering, ROC-AUC, Precision-Recall. Deep learning with TensorFlow, Keras, PyTorch.
Model Evaluation: SHAP, LIME, Explainable AI, Ragas for hallucination/bias/toxicity.
MLOps: CI/CD, Docker, FastAPI, GitLab, MLflow, Feature Stores, Data Drift detection, Model Governance.
Cloud: AWS (SageMaker, Lambda, Bedrock, Textract, OpenSearch, Step Functions, CloudWatch), GCP, Azure (certified).
NLP: Dense/Sparse Embeddings, NER, Topic Modelling, BERT, DistilBERT.
Programming: Python (pandas, NumPy, Scikit-learn, TensorFlow, PyTorch), SQL, PySpark, SparkSQL, Linux.

EDUCATION:
- M.S. in Machine Learning & Artificial Intelligence, Liverpool John Moores University, UK (2023–2025)
- Executive PG in Data Science & AI, IIIT Bangalore (2022–2023)
- B.E. in Electronics & Communication, New Horizon College of Engineering (2006–2010)

CERTIFICATIONS: Multiple across Azure, GCP, and ML domains. Full list on GitHub.

RESEARCH THESIS:
Integration of contextual language models (GPT-3.5, Mixtral, Llama 3.1) with classical ML (XGBoost, Random Forest) for tabular datasets. Developed methodology to convert tabular data into enriched text. Applied PCA for input optimisation.

OPEN SOURCE PROJECTS:
1. Antigravity Studio: Autonomous Self-Correcting UI Designer (Gemini 2.5 + Imagen 4 Ultra, real-time agent ReAct loop tracking, closed-loop evaluator, CI/CD) — Live
2. Production-Grade Hybrid RAG System (github.com/hargurjeet/hybrid-rag) — Live
3. AI-Powered Resume Parser (github.com/hargurjeet/resume-parser) — Live
4. Local AI Assistant & SLM Benchmarking (github.com/hargurjeet/local_slm_experiments) — Research
5. DuckDB Database MCP Server (github.com/hargurjeet/database-mcp) — Open Source
6. Finance Planner (github.com/hargurjeet/Finance_Planner) — In Progress
7. Blog Generator using Llama 2 (live)
8. Traffic Sign Classifier (computer vision)
9. Detecting Fake News (NLP classification)
10. Anime Recommendation System

COMMUNITY: Active on Stack Overflow, Jovian, PyTorch forums. Publishes on Medium: gurjeet333.medium.com.

RECRUITER Q&A:
Q: Current role? A: Senior Data Scientist at British Telecom (BT) since May 2022.
Q: Years of experience? A: 15+ total, 9+ in data science/ML, 3+ in Generative AI.
Q: Open to new roles? A: Yes — open to senior data science and AI engineering opportunities.
Q: Cloud platforms? A: AWS (SageMaker, Lambda, Bedrock, Textract, OpenSearch, Step Functions, CloudWatch), GCP, Azure (certified on both).
Q: LLM/GenAI frameworks? A: LangChain, LangGraph, CrewAI, AWS Bedrock. OpenAI, Anthropic, Gemini APIs.
Q: Production AI experience? A: Yes — RAG chatbot processing 100K+ documents at BT with Docker, CI/CD, and monitoring.
Q: Highest education? A: M.S. in ML & AI, Liverpool John Moores University (2023–2025).
Q: Industries? A: Telecommunications (BT), Oil & Gas (Shell), IT Services (TCS).
Q: LLM safety/evaluation? A: Yes — full LLM eval framework using Ragas for hallucination, toxicity, bias, faithfulness.
Q: Programming languages? A: Python (primary), SQL, PySpark, SparkSQL, Linux.
Q: Location? A: Bangalore, India.
`;

const SYSTEM_PROMPT = `You are an AI assistant on Hargurjeet Singh Ganger's portfolio website. Your job is to help recruiters and potential employers learn about Hargurjeet's background, skills, experience, and projects. Be friendly, professional, and concise — answer in 2–4 sentences unless a detailed answer is clearly needed. Only answer based on the knowledge base below. If something is not covered, say so and suggest reaching out directly at gurjeet333@gmail.com.

${KNOWLEDGE_BASE}`;

export async function POST(req: NextRequest) {
  const { question, chatHistory = [] } = await req.json();

  if (!process.env.FIREWORKS_API_KEY) {
    return new Response("FIREWORKS_API_KEY not configured", { status: 500 });
  }

  const messages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...chatHistory,
    { role: "user", content: question },
  ];

  const fireworksRes = await fetch(
    "https://api.fireworks.ai/inference/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.FIREWORKS_API_KEY}`,
      },
      body: JSON.stringify({
        model: "accounts/fireworks/models/kimi-k2p5",
        messages,
        stream: true,
        max_tokens: 512,
        temperature: 0.6,
        thinking: { type: "disabled" },
      }),
    }
  );

  if (!fireworksRes.ok) {
    return new Response("Upstream API error", { status: 502 });
  }

  const reader = fireworksRes.body!.getReader();
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();

  // Filter out <think>...</think> blocks that Qwen3 sometimes emits
  let thinkBuffer = "";
  let insideThink = false;

  const stream = new ReadableStream({
    async start(controller) {
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const data = line.slice(6).trim();
            if (data === "[DONE]") {
              controller.close();
              return;
            }
            let token = "";
            try {
              const parsed = JSON.parse(data);
              token = parsed.choices?.[0]?.delta?.content ?? "";
            } catch {
              continue;
            }
            if (!token) continue;

            // Strip <think>...</think> blocks
            thinkBuffer += token;
            let output = "";
            while (thinkBuffer.length > 0) {
              if (!insideThink) {
                const start = thinkBuffer.indexOf("<think>");
                if (start === -1) {
                  output += thinkBuffer;
                  thinkBuffer = "";
                  break;
                }
                output += thinkBuffer.slice(0, start);
                thinkBuffer = thinkBuffer.slice(start + 7);
                insideThink = true;
              } else {
                const end = thinkBuffer.indexOf("</think>");
                if (end === -1) break; // wait for more chunks
                thinkBuffer = thinkBuffer.slice(end + 8);
                insideThink = false;
              }
            }
            if (output) controller.enqueue(encoder.encode(output));
          }
        }
        // Flush any remaining non-think content
        if (thinkBuffer && !insideThink) {
          controller.enqueue(encoder.encode(thinkBuffer));
        }
        controller.close();
      } catch {
        controller.error("Stream error");
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
