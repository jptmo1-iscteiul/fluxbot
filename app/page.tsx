"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Zap, Settings, Mail, Bot, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 md:p-12">
      <header className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Automatiza o teu Negócio
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Automatizamos tarefas repetitivas da tua empresa com ferramentas
          no-code. Poupa tempo, reduz erros e foca-te no crescimento.
        </p>
        <Button className="mt-6 text-lg px-6 py-4">Quero Automatizar</Button>
      </header>

      <section className="grid md:grid-cols-3 gap-8 mb-20">
        <Card>
          <CardContent className="p-6 text-center">
            <Zap className="mx-auto mb-4 w-10 h-10 text-blue-600" />
            <h2 className="text-xl font-semibold mb-2">Vendas</h2>
            <p className="text-gray-600">
              Seguimento automático de leads, envio de propostas e integração
              com CRM.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Settings className="mx-auto mb-4 w-10 h-10 text-green-600" />
            <h2 className="text-xl font-semibold mb-2">RH</h2>
            <p className="text-gray-600">
              Onboarding de funcionários, gestão de férias e comunicações
              internas automatizadas.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Mail className="mx-auto mb-4 w-10 h-10 text-purple-600" />
            <h2 className="text-xl font-semibold mb-2">Financeiro</h2>
            <p className="text-gray-600">
              Envio automático de faturas, organização de despesas e alertas
              mensais.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Exemplos de Automações
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Bot className="text-blue-500 w-6 h-6" />
                <h3 className="text-lg font-semibold">Follow-up de Leads</h3>
              </div>
              <p className="text-gray-600">
                Quando um lead preenche o formulário, é criado um registo no
                Airtable, um email de agradecimento é enviado, e o gestor é
                notificado automaticamente.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-green-500 w-6 h-6" />
                <h3 className="text-lg font-semibold">Gestão de Faturas</h3>
              </div>
              <p className="text-gray-600">
                Faturas adicionadas ao Google Drive são automaticamente
                catalogadas, lançadas no Airtable, e enviadas por email no fim
                do mês.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Vamos conversar?</h2>
        <p className="text-gray-600 mb-6">
          Preenche o formulário e diz-nos o que queres automatizar. Respondemos
          em 24h.
        </p>
        <form
          className="space-y-4 text-left"
          action="https://formsubmit.co/teuemail@email.com"
          method="POST"
        >
          <Input placeholder="Nome" name="nome" required />
          <Input placeholder="Email" type="email" name="email" required />
          <Textarea
            placeholder="Descreve o que gostarias de automatizar"
            name="mensagem"
            rows={4}
            required
          />
          <div className="text-center">
            <Button className="text-lg px-6 py-4" type="submit">
              Enviar
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}
