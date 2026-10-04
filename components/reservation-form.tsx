
"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900 text-white">
          <ArrowUpRight size={21} />
        </div>

        <h3 className="mt-5 text-2xl font-medium text-neutral-900">
          Pedido enviado
        </h3>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-neutral-500">
          Recebemos o seu pedido. A equipa da Sungo&apos;s entrará em contacto
          consigo para confirmar a sua reserva.
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-neutral-900 underline underline-offset-4"
        >
          Fazer outra reserva
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs font-medium uppercase tracking-wide text-neutral-600"
          >
            Nome
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Nome completo"
            className="h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-neutral-900"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-xs font-medium uppercase tracking-wide text-neutral-600"
          >
            Telefone
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+244 000 000 000"
            className="h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-neutral-900"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-medium uppercase tracking-wide text-neutral-600"
          >
            E-mail
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="seuemail@exemplo.com"
            className="h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-neutral-900"
          />
        </div>

        <div>
          <label
            htmlFor="destination"
            className="mb-2 block text-xs font-medium uppercase tracking-wide text-neutral-600"
          >
            Destino
          </label>

          <select
            id="destination"
            name="destination"
            required
            defaultValue=""
            className="h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-700 outline-none transition focus:border-neutral-900"
          >
            <option value="" disabled>
              Escolha um destino
            </option>
            <option value="cabo-ledo">Cabo Ledo</option>
            <option value="luanda">Luanda</option>
            <option value="outro">Outro destino</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="date"
            className="mb-2 block text-xs font-medium uppercase tracking-wide text-neutral-600"
          >
            Data
          </label>

          <input
            id="date"
            name="date"
            type="date"
            required
            className="h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-700 outline-none transition focus:border-neutral-900"
          />
        </div>

        <div>
          <label
            htmlFor="people"
            className="mb-2 block text-xs font-medium uppercase tracking-wide text-neutral-600"
          >
            Pessoas
          </label>

          <input
            id="people"
            name="people"
            type="number"
            min="1"
            required
            placeholder="Ex.: 2"
            className="h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-neutral-900"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-xs font-medium uppercase tracking-wide text-neutral-600"
          >
            Observações
          </label>

          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Alguma preferência ou informação adicional?"
            className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-neutral-400 focus:border-neutral-900"
          />
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="group flex h-12 w-full items-center justify-center gap-3 rounded-full bg-neutral-900 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Solicitar reserva
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </form>
  );
}

