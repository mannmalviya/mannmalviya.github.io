---
title: "Finished my internship @ Chelsio Communications"
date: 2025-09-12
description: "10 weeks building a production RAG chatbot, what I learned, what broke, and what finally worked."
layout: announcement
published: true
---

This summer I interned at **Chelsio Communications**, a semiconductor company based in Sunnyvale that specializes in high-performance Ethernet networking and storage solutions. My project: build a production-ready internal chatbot powered by an LLM and a private knowledge base, entirely on-premise with no external APIs.

> Every component had to stay local. Sending proprietary data to an outside server wasn't an option, which pushed me toward building a fully self-contained system from the ground up.

I was given a serious machine to work with: 128 cores, 256 GB RAM, 1.1 TB of disk, and an RTX 5090. The hardware constraint of staying local didn't sting much when the local hardware is that good.

I chose **Retrieval Augmented Generation (RAG)** over fine-tuning after weighing the tradeoffs. Fine-tuning would have required retraining model weights, curating a high-quality dataset, and burning weeks of compute time. RAG let me combine a pre-trained LLM's reasoning ability with a semantic search layer grounded in the company's actual documents, and it was achievable within the internship timeline.

The hardest part turned out to be a problem I didn't anticipate: **document parsing**. Most of Chelsio's knowledge base lives in PDFs full of complex tables. Traditional parsers fell apart on these, producing poor embeddings and, consequently, poor retrieval. After a lot of trial and error, I came across **ColPali**, a method that embeds each PDF page directly as an image and performs semantic search over image embeddings, bypassing the parse-chunk-index pipeline entirely. It was the breakthrough the project needed.

---

## Stack

| Layer      | Tech                      |
| ---------- | ------------------------- |
| Retrieval  | ColPali (vision RAG)      |
| Vector DB  | Local, on-prem, Chroma DB |
| Inference  | RTX 5090 local            |
| Backend    | REST API + RAG pipeline   |
| Containers | Docker                    |

---

## Frontend

Once the RAG pipeline was working, I had to ship it as an actual usable application, which meant building a full-stack product. The backend was entirely mine: API server, database setup, RAG orchestration. For the frontend, I evaluated a few off-the-shelf chat UIs rather than building one from scratch.

| UI                                                           | Verdict                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------- |
| **[Gradio](https://github.com/gradio-app/gradio)**           | Fine for quick PoCs, not production-ready in terms of polish. |
| **[ChatbotUI](https://github.com/mckaywrigley/chatbot-ui)**  | Decent but had auth and user management friction.             |
| **[Open WebUI](https://github.com/open-webui/open-webui)** ✓ | Clean, extensible, easy to wire up to custom backends.        |

Open WebUI connected cleanly to the API endpoints exposed by my backend and gave the tool a professional, usable interface without me having to build a chat UI from scratch. The backend was significantly more complex than the frontend integration, and that's where I spent most of my time.

---

Overall, this was the most meaningful technical project I've worked on. It has also deepened my interest in AI systems substantially. I want to spend more time learning about LLMs in depth rather than treating them as a black box.

<img src="{{ 'assets/img/announcements/internship_end/chelsio_chat_architecture.png' | relative_url }}" width="600">
*Chelsio Chat Architecture*
