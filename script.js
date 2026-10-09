// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "after:end": async function anonymous(
) {
(async () => {

 // 1. 自动生成参加者ID
const participant_id = crypto.randomUUID();

// 3. 获取问卷数据
const originalCsv = this.options.datastore.exportCsv();

const lines = originalCsv.trimEnd().split(/\r?\n/);

const csvData = [
  lines[0] + ",participant_id",
  ...lines.slice(1).map(line => line + "," + participant_id)
].join("\n");

// 4. 使用参加者ID作为文件名
const filename = "participant_" + participant_id + ".csv";




  // 5. 加载 DataPipe 客户端
  if (!window.DataPipe) {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/datapipe-client@0.2.0";

    await new Promise((resolve, reject) => {
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  // 6. 上传数据
  const result = await DataPipe.saveData({
    experiment_id: "iMAIUYbsFVf3",
    filename: filename,
    data: csvData
  });

  // 7. 检查上传结果
  if (result.ok) {
    console.log("DataPipe 上传成功！");
    console.log("文件名：", filename);
  } else {
    console.error(
      "DataPipe 上传失败：",
      result.status,
      result.body
    );
  }

})().catch(error => {
  console.error("DataPipe 上传发生错误：", error);
});
}
      },
      "title": "Sequence",
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "text",
              "title": "「Emotion Crafting Scale（ECS）日本語版の作成および信頼性・妥当性の検討ー成人の愛着傾向との関連に着目してー」に関する研究協力のお願い"
            },
            {
              "required": true,
              "type": "divider"
            },
            {
              "required": true,
              "type": "text",
              "content": "　本研究は、自分の感情に気づき、望ましい感情体験を生み出すために意図的に働きかける「エモーション・クラフティング」を測定するEmotion Crafting Scale（ECS）の日本語版を作成し、その信頼性および妥当性を検討することを目的としています。あわせて、既存の感情調整方略、心理的健康および成人の愛着傾向との関連について調べます。",
              "title": "［研究の趣旨］"
            },
            {
              "required": true,
              "type": "text",
              "content": "　本研究の成果は、人々が自分の感情とどのように向き合っているかについての理解を深め、将来の心理教育やメンタルヘルス支援に役立つ基礎的な知見になることが期待されます。",
              "title": "［本研究がもたらす社会的貢献についての予測］"
            },
            {
              "required": true,
              "type": "text",
              "content": "　日本語で質問内容を理解し、回答することができる18歳以上の成人を対象とします。性別、職業、所属および居住地域による制限は設けません。18歳未満の方、研究参加に同意しない方、アンケートを完了しなかった方および明らかに不適切な回答をした方は、分析対象に含めません。",
              "title": "［本研究の調査対象］"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ→",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "研究協力のお願い①"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "［調査項目の概要］",
              "content": "　本調査では、研究にご協力いただく方々の構成を把握し、基本属性による回答傾向の違いを検討するため、年齢、性別、婚姻状況、収入などについてお尋ねします。なお、性別、婚姻状況、収入など、回答を希望されない項目については、「回答しない」を選択することができます。\nまた、肯定的な感情への気づきや、望ましい感情体験を生み出すための行動、日常的な感情の調整方法、普段感じている肯定的な感情、人生に対する満足感、心身の活力、心理的な充実感、気分の落ち込みや不安を含む心理的苦痛、および対人関係における考え方や感じ方などについてお尋ねします。"
            },
            {
              "required": true,
              "type": "text",
              "title": "［本研究の実施方法］",
              "content": "　募集案内に記載したURLから調査画面にアクセスしていただきます。最初に、研究目的、調査内容、所要時間、謝金、研究データの取扱いおよび研究参加の任意性等について説明します。説明内容を確認し、「本研究への参加に同意する」を選択した方のみ質問画面へ進みます。"
            },
            {
              "required": true,
              "type": "text",
              "content": "　年齢や性別等の基本属性を尋ねた後、感情調整や肯定的感情、人生満足度、主観的活力、心理的ウェルビーイング、抑うつ、不安および一般他者に対する愛着傾向等に関する質問に回答していただきます。"
            },
            {
              "required": true,
              "type": "text",
              "content": "　調査の所要時間は約25分です。調査項目数が多いため、疲労や集中力の低下が生じる可能性があります。また、感情調整、対人関係、抑うつおよび不安に関する質問によって、一時的な不快感や心理的負担が生じる可能性があります。負担を感じた場合は、いつでも回答を中止することができます。"
            },
            {
              "required": true,
              "type": "text",
              "title": "［本研究の実施場所］",
              "content": "　本調査はオンラインで実施します。ご自宅等の任意の場所から、ご自身のパソコン、タブレットまたはスマートフォンを用いて調査用ウェブサイトへアクセスし、回答してください。"
            },
            {
              "required": true,
              "type": "text",
              "title": "［調査の実施時期］",
              "content": "　令和8年10月～11月として、必要な回答数が集まり次第データの収集は終了します。"
            },
            {
              "required": true,
              "type": "text",
              "title": "［アンケート結果の管理方法と使用について］",
              "content": "本研究に関するデータ分析の目的のみで使用されます。氏名や住所、電話番号、メールアドレス等、回答者を直接特定できる情報は、研究データとして収集しません。回答データには研究用IDを付与し、統計的に処理します。回答データ、分析用データ、分析結果および研究関係書類等の電子ファイルは、大阪教育大学の機関アカウントで管理されるMicrosoft OneDrive内のアクセス制限されたフォルダに保存します。研究実施者及び指導教員のみがアクセスできるようアクセス制限を設定します。研究データは、研究実施者が所属する大学における研究活動上の不正行為の防止等に関する規定の第9条に従い、10年間保管・管理します（令和８年10月から令和18年10月まで）。その後、電子データは専用ソフトにて破棄します。参加者の性別、年齢等は論文内で公開されますが、個人が特定される情報は公表されません。"
            },
            {
              "required": true,
              "type": "text",
              "title": "［研究成果の公表について］",
              "content": "　本研究の成果は、研究実施者所属大学の卒業論文として提出します。国内外の学術学会大会での発表及び学術誌にも公表する可能性があります。"
            },
            {
              "required": true,
              "type": "text",
              "title": "［倫理的配慮とプライバシーの保護について］",
              "content": "本研究は大阪教育大学研究倫理委員会で承認されています。本研究への協力は、研究の趣旨や内容等に同意を頂けた方のみの任意参加となります。研究に参加しない場合や、回答途中で参加を中止した場合にも、不利益を受けることはありません。調査画面の冒頭に表示される説明を読み、「本研究への参加に同意する」を選択した場合にのみ質問画面へ進みます。紙の同意書への署名は求めません。性別や収入などの基本属性は、調査対象者の構成を把握するとともに、各属性と回答傾向との関連を検討するためにお尋ねします。これらの項目から個人を特定することはありません。回答を希望しない場合は、「回答しない」を選択できます。回答送信前であれば、調査画面を閉じることで、いつでも参加を中止できます。未完了の回答は分析に使用しません。本調査は無記名で実施し、回答者と回答データを結び付ける情報を収集しません。そのため、回答送信後は該当する回答データを特定できず、同意の撤回および回答データの削除には対応できません。あらかじめご了承ください。"
            },
            {
              "required": true,
              "type": "text",
              "title": "［謝礼］",
              "content": "　本調査への協力に対して、謝礼として300円を支給します。支給方法と支給時期は「クラウドワークス」の規定に従います。ただし、調査を最後まで完了していない場合には、謝礼は支給されません。"
            },
            {
              "required": true,
              "type": "text",
              "title": "［研究実施者及び指導教員の連絡先］",
              "content": "ご不明な点がございましたら、以下までお気軽にお問い合わせ下さい。"
            },
            {
              "required": true,
              "type": "text",
              "content": "研究実施者：大阪教育大学 教育学部 教育協働学科 教育心理科学専攻　姜西茹\n〒582-8582\t大阪府柏原市旭ヶ丘4-698-1\nE-mail: g237113@ex.osaka-kyoiku.ac.jp"
            },
            {
              "required": true,
              "type": "text",
              "content": "指導教員：総合教育系　心理科学部門　准教授　山口正寛\nE-mail: yamaguchi-m74@cc.osaka-kyoiku.ac.jp\nTel: 0729783624（内線）"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ→",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "研究協力のお願い②"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "研究参加への同意確認"
            },
            {
              "required": true,
              "type": "divider"
            },
            {
              "required": true,
              "type": "text",
              "content": "　私は、「Emotion Crafting Scale（ECS）日本語版の作成および信頼性・妥当性の検討  ―成人の愛着傾向との関連に着目して―」に関する研究協力について、研究協力依頼を読み、以下の事項について説明を受けました。"
            },
            {
              "required": true,
              "type": "radio",
              "label": "説明事項（説明を受けた項目、チェックをして下さい）",
              "options": [
                {
                  "label": "本研究の概要と目的"
                },
                {
                  "label": "本人の自由意思による参加であること"
                },
                {
                  "label": "本調査の対象者が、日本語で質問内容を理解し回答できる18歳以上の成人であること"
                },
                {
                  "label": "本調査は無記名のオンラインアンケート調査であり、回答者と回答データを結び付ける情報が収集されないため、回答送信後は該当する回答データを特定できず、同意の撤回および回答データの削除には対応できないこと"
                },
                {
                  "label": "回答送信前であれば、調査画面を閉じることでいつでも参加を中止でき、中止した場合にも不利益を受けないこと"
                },
                {
                  "label": "個人情報は厳重に管理され、保護されること"
                },
                {
                  "label": "本調査への協力に対する謝礼の支払条件件について"
                },
                {
                  "label": "感情や対人関係、抑うつおよび不安等に関する質問によって、一時的な不快感や心理的負担が生じる可能性があること"
                }
              ],
              "name": ""
            },
            {
              "required": true,
              "type": "text",
              "content": "　以上の説明をお読みいただき、内容をご理解のうえ、本調査への参加に同意いただける方は、「本研究への参加に同意する」を押して回答画面へお進みください。本調査への参加に同意いただけない場合は、そのまま画面を閉じて調査を終了してください。なお、参加に同意されないことによって、不利益を受けることはありません。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "本研究への参加に同意する →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "研究参加への同意確認",
          "width": "l"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "以下の質問に回答してください。"
            },
            {
              "required": true,
              "type": "divider"
            },
            {
              "required": true,
              "type": "input",
              "label": "年齢を半角数字で入力してください。",
              "attributes": {
                "type": "number",
                "min": "18"
              },
              "help": "",
              "name": "age"
            },
            {
              "required": true,
              "type": "radio",
              "label": "性別を回答してください。",
              "options": [
                {
                  "label": "男性",
                  "coding": "1"
                },
                {
                  "label": "女性",
                  "coding": "2"
                },
                {
                  "label": "その他",
                  "coding": "3"
                },
                {
                  "label": "回答しない",
                  "coding": "4"
                }
              ],
              "name": "gender"
            },
            {
              "required": true,
              "type": "radio",
              "label": "あなたの最終学歴（中退含む）は何ですか。",
              "options": [
                {
                  "label": "中学・高校",
                  "coding": "1"
                },
                {
                  "label": "専修・高専・短大",
                  "coding": "2"
                },
                {
                  "label": "四年制大学",
                  "coding": "3"
                },
                {
                  "label": "大学院　",
                  "coding": "4"
                },
                {
                  "label": "その他",
                  "coding": "5"
                },
                {
                  "label": "回答しない",
                  "coding": "6"
                },
                {
                  "coding": ""
                }
              ],
              "name": "education"
            },
            {
              "required": true,
              "type": "radio",
              "label": "あなたの婚姻状況をお知らせください。",
              "options": [
                {
                  "label": "既婚\u002F同居中",
                  "coding": "1"
                },
                {
                  "label": "独身",
                  "coding": "2"
                },
                {
                  "label": "交際相手がいる",
                  "coding": "3"
                },
                {
                  "label": "別居\u002F離婚",
                  "coding": "4"
                },
                {
                  "label": "死別",
                  "coding": "5"
                },
                {
                  "label": "回答しない",
                  "coding": "6"
                }
              ],
              "name": "marital_status"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ→",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "フェイスシート項目"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 444.8,
              "height": 36.16,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "以上でアンケートは終了です。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keydown(Enter)": "finish"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "回答完了"
        }
      ]
    }
  ]
})

// Let's go!
study.run()