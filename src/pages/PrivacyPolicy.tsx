export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Политика конфиденциальности</h1>
        <p className="text-white/60 mb-8">Дата вступления в силу: 12 мая 2026 г.</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Общие положения</h2>
          <p className="text-white/70 leading-relaxed">
            Настоящая Политика конфиденциальности регулирует порядок обработки персональных данных пользователей
            сайта самозанятым Попов Алексей Юрьевич, ИНН 644101988643 (далее — «Оператор»).
            Использование сайта означает безоговорочное согласие с настоящей Политикой.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Какие данные мы собираем</h2>
          <ul className="text-white/70 leading-relaxed list-disc list-inside space-y-2">
            <li>Имя и фамилия</li>
            <li>Адрес электронной почты</li>
            <li>Номер телефона</li>
            <li>Данные, добровольно предоставленные при заполнении форм на сайте</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Цели обработки данных</h2>
          <ul className="text-white/70 leading-relaxed list-disc list-inside space-y-2">
            <li>Обработка заявок на участие в курсах и образовательных программах</li>
            <li>Связь с пользователем по вопросам оказания услуг</li>
            <li>Направление информационных материалов с согласия пользователя</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Хранение и защита данных</h2>
          <p className="text-white/70 leading-relaxed">
            Оператор принимает необходимые организационные и технические меры для защиты персональных данных
            от неправомерного доступа, изменения, раскрытия или уничтожения. Данные не передаются третьим
            лицам без согласия пользователя, за исключением случаев, предусмотренных законодательством РФ.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Права пользователя</h2>
          <p className="text-white/70 leading-relaxed">
            Пользователь вправе запросить изменение, блокировку или удаление своих персональных данных,
            а также отозвать согласие на их обработку, направив обращение по электронной почте Оператора.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">6. Контактные данные</h2>
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
