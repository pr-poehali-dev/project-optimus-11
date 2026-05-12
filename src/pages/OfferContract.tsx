export default function OfferContract() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Договор публичной оферты</h1>
        <p className="text-white/60 mb-8">Дата вступления в силу: 12 мая 2026 г.</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Общие положения</h2>
          <p className="text-white/70 leading-relaxed">
            Самозанятый Попов Алексей Юрьевич, ИНН 644101988643 (далее — «Исполнитель»), публикует настоящий
            Договор публичной оферты об оказании образовательных услуг. Акцептом оферты считается оплата услуг
            или подача заявки на участие в курсе.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Предмет договора</h2>
          <p className="text-white/70 leading-relaxed">
            Исполнитель обязуется оказать Заказчику образовательные услуги в форме онлайн-курсов по лучевой
            диагностике в объёме и по программе, указанной на сайте. Заказчик обязуется оплатить услуги в
            установленном порядке.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Стоимость и порядок оплаты</h2>
          <p className="text-white/70 leading-relaxed">
            Стоимость каждого курса указана на сайте. Оплата производится в полном объёме до начала обучения.
            Исполнитель применяет налоговый режим «Налог на профессиональный доход» (самозанятость) и не
            является плательщиком НДС.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Права и обязанности сторон</h2>
          <p className="text-white/70 leading-relaxed mb-3">Исполнитель обязуется:</p>
          <ul className="text-white/70 leading-relaxed list-disc list-inside space-y-2 mb-4">
            <li>Предоставить доступ к материалам курса в оговорённые сроки</li>
            <li>Обеспечить качество обучения в соответствии с программой</li>
            <li>Выдать документ об окончании курса при его наличии</li>
          </ul>
          <p className="text-white/70 leading-relaxed mb-3">Заказчик обязуется:</p>
          <ul className="text-white/70 leading-relaxed list-disc list-inside space-y-2">
            <li>Своевременно оплатить услуги</li>
            <li>Не передавать материалы курса третьим лицам</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Возврат денежных средств</h2>
          <p className="text-white/70 leading-relaxed">
            Заказчик вправе отказаться от услуг до начала курса и получить полный возврат средств.
            После начала курса возврат осуществляется пропорционально неоказанной части услуг.
            Заявление на возврат направляется на электронную почту Исполнителя.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">6. Ответственность сторон</h2>
          <p className="text-white/70 leading-relaxed">
            Стороны несут ответственность за неисполнение обязательств в соответствии с законодательством РФ.
            Исполнитель не несёт ответственности за технические сбои на стороне Заказчика, препятствующие
            доступу к материалам курса.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">7. Реквизиты Исполнителя</h2>
          <p className="text-white/70 leading-relaxed">
            Самозанятый Попов Алексей Юрьевич<br />
            ИНН: 644101988643<br />
          </p>
        </section>

        <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors">← На главную</a>
      </div>
    </div>
  );
}
