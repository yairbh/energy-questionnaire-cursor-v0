const questionnaire = {
    sections: {
        1: {
            question: "איזה סוג תחנת כוח אתם מציעים לבנות בישראל?",
            options: [
                { text: "גז טבעי", nextSection: 2, icon: "גז.png" },
                { text: "טורבינת רוח", nextSection: 3, icon: "רוח.png" },
                { text: "הידרו-אלקטרי", nextSection: 4, icon: "הידרו.png" },
                { text: "פוטו-וולטאי", nextSection: 5, icon: "פוטו-וולטאית.png" },
                { text: "תרמו-סולארי", nextSection: 6, icon: "תרמו-סולארי.png" },
                { text: "גרעיני", nextSection: 7, icon: "גרעיני.png" }
            ],
            type: "circle"
        },
        2: {
            question: "גז טבעי",
            content: "בחירה מצוינת! גז טבעי הוא מקור אנרגיה אמין ונקי יחסית בהשוואה לפחם ונפט. יש לו טביעת אצבע פחמנית נמוכה יותר והוא יכול לספק חשמל באופן רציף.\n\nיחד עם זאת... הוא עדיין פולט גזי חממה ומתבסס על משאבים מוגבלים, מה שיכול לתרום להתחממות הגלובלית ולדלדול המשאבים. בנוסף, תשתית להפקת גז טבעי והפצתו יכולה לגרום להשפעות סביבתיות שליליות משמעותיות.",
            question2: "האם ברצונך לשקול אפשרות אחרת או להמשיך עם גז טבעי?",
            options: [
                { text: "להמשיך עם גז טבעי", nextSection: 9, icon: "גז.png" },
                { text: "לבחור אפשרות אחרת", nextSection: 8, icon: "other_option.png" }
            ]
        },
        3: {
            question: "טורבינות רוח",
            content: "בחירה מצוינת! טורבינות רוח הן מקור אנרגיה מתחדש שמייצר חשמל ללא פליטת גזי חממה במהלך הפעולה. הן יכולות להיות מותקנות ביבשה או בים ולתרום להפחתת התלות בדלקים פוסיליים (דלק מאובנים).\n\nיחד עם זאת... הן דורשות הרבה מקום ויכולות להשפיע על חיי הבר המקומיים, במיוחד על ציפורים ועטלפים. ההשפעה החזותית והרעש של חוות רוח יכולה גם להוות בעיה לקהילות מקומיות. בנוסף, הרוח אינה זמינה באופן רציף, כלומר היא לא תמיד נושבת כאשר יש צורך בחשמל.",
            question2: "האם ברצונך לשקול אפשרות אחרת או להמשיך עם טורבינות רוח?",
            options: [
                { text: "להמשיך עם טורבינות רוח", nextSection: 10, icon: "רוח.png" },
                { text: "לבחור אפשרות אחרת", nextSection: 8, icon: "other_option.png" }
            ]
        },
        4: {
            question: "הידרו-אלקטרי",
            content: "בחירה מצוינת! כוח הידרו-אלקטרי מנצל את האנרגיה של מים זורמים כדי לייצר חשמל. זהו מקור אנרגיה מתחדש שיכול לייצר כמויות גדולות של חשמל ולספק אנרגיה אמינה ויציבה.\n\nיחד עם זאת... בניית מאגרי מים גדולים לצורך תחנות הידרו-אלקטריות יכולה לגרום להשפעות סביבתיות שליליות משמעותיות, כמו שינוי מערכות מים, העברת קהילות והשפעה על חיי הבר המקומיים. בנוסף, ייצור כוח הידרו-אלקטרי יכול להיות מושפע מהבדלים עונתיים ומבצורות.",
            question2: "האם ברצונך לשקול אפשרות אחרת או להמשיך עם כוח הידרו-אלקטרי?",
            options: [
                { text: "להמשיך עם הידרו-אלקטרי", nextSection: 11, icon: "הידרו.png" },
                { text: "לבחור אפשרות אחרת", nextSection: 8, icon: "other_option.png" }
            ]
        },
        5: {
            question: "פוטו-וולטאי",
            content: "בחירה מצוינת! כוח פוטו-וולטאי, שמיוצר על ידי פאנלים סולאריים, הוא מקור אנרגיה נקי ומתחדש. ישראל, עם שפע אור השמש שלה, מתאימה מאוד לטכנולוגיה זו.\n\nיחד עם זאת... תחנות פוטו-וולטאיות מייצרות כמויות קטנות יחסית של חשמל בהשוואה לטכנולוגיות אחרות. כדי לייצר מספיק חשמל, יש צורך בשטחים גדולים לפאנלים סולאריים, ולישראל יש מעט שטחים פתוחים זמינים למתקנים כאלה. בנוסף, כוח סולארי זמין רק לסירוגין, שכן הוא תלוי באור השמש, שאינו זמין בלילה ויכול להיות מופחת בימים מעוננים.",
            question2: "האם ברצונך לשקול אפשרות אחרת או להמשיך עם כוח פוטו-וולטאי?",
            options: [
                { text: "להמשיך עם פוטו-וולטאי", nextSection: 12, icon: "פוטו-וולטאית.png" },
                { text: "לבחור אפשרות אחרת", nextSection: 8, icon: "other_option.png" }
            ]
        },
        6: {
            question: "תרמו-סולארי",
            content: "בחירה מצוינת! תחנת כוח תרמו-סולארית, הידועה גם כתחנת כוח סולארי מרוכז, משתמשת במראות או עדשות לריכוז אור השמש כדי לייצר חום, שמשמש לאחר מכן לייצור חשמל. טכנולוגיה זו יכולה לאחסן אנרגיה תרמית לשימוש כאשר השמש אינה זורחת, מה שמאפשר אספקת חשמל יציבה יותר ממערכות פוטו-וולטאיות.\n\nיחד עם זאת... תחנות תרמו-סולאריות דורשות משאבי קרקע רבים ומים לקירור. בנוסף, הבנייה והתחזוקה של תחנות אלו עלולות להיות יקרות מאוד.",
            question2: "האם ברצונך לשקול אפשרות אחרת או להמשיך עם כוח תרמו-סולארי?",
            options: [
                { text: "להמשיך עם תרמו-סולארי", nextSection: 13, icon: "תרמו-סולארי.png" },
                { text: "לבחור אפשרות אחרת", nextSection: 8, icon: "other_option.png" }
            ]
        },
        7: {
            question: "גרעיני",
            content: "בחירה מצוינת! כוח גרעיני יכול לייצר כמות גדולה של חשמל עם פליטות נמוכות של גזי חממה במהלך הפעולה. הוא מאפשר אספקת חשמל יציבה ואמינה, מה שהופך אותו לאפשרות אטרקטיבית כמענה לביקושים גבוהים לחשמל.\n\nיחד עם זאת... כוח גרעיני מציב סיכוני בטיחות משמעותיים, כולל פוטנציאל לתאונות קטסטרופליות והאתגר ארוך הטווח של ניהול פסולת רדיואקטיבית. בנוסף, תחנות גרעיניות הן יקרות לבנייה ולפירוק, ודורשות אמצעי בטיחות ואבטחה מחמירים.",
            question2: "האם ברצונך לשקול אפשרות אחרת או להמשיך עם כוח גרעיני?",
            options: [
                { text: "להמשיך עם כוח גרעיני", nextSection: 14, icon: "גרעיני.png" },
                { text: "לבחור אפשרות אחרת", nextSection: 8, icon: "other_option.png" }
            ]
        },
        8: {
            question: "באיזו תחנת כוח בחרת?",
            options: [
                { text: "גז טבעי", nextSection: 9, icon: "גז.png" },
                { text: "טורבינת רוח", nextSection: 10, icon: "רוח.png" },
                { text: "הידרו-אלקטרי", nextSection: 11, icon: "הידרו.png" },
                { text: "פוטו-וולטאי", nextSection: 12, icon: "פוטו-וולטאית.png" },
                { text: "תרמו-סולארי", nextSection: 13, icon: "תרמו-סולארי.png" },
                { text: "גרעיני", nextSection: 14, icon: "גרעיני.png" }
            ],
            type: "circle"
        },
        9: {
            question: "גז טבעי",
            content: "מאחר שבחרתם בגז טבעי, חשוב לשקול את ההשלכות הגיאו-פוליטיות, שכן הסתמכות על יבוא גז טבעי יכולה להשפיע על הביטחון האנרגטי הלאומי. בישראל יש אמנם מאגרי גז רבים, אך יום ויבוא והם ייגמרו, וישראל תיאלץ לייבא גז ממדינות אחרות. בנוסף, ההפקה וההובלה של הגז הטבעי יכולות לגרום להשפעות סביבתיות שליליות, כגון דליפות מתאן המהווה גז חממה. למרות החסרונות הללו, גז טבעי הוא עדיין בעל זיהום פחמן נמוך יותר לעומת דלק מאובנים מסוגים אחרים.",
            question2: "האם ברצונך לאשר את הבחירה שלך או לעבור לאפשרות אחרת?",
            options: [
                { text: "לאשר את הבחירה בגז טבעי", nextSection: 15, icon: "גז.png" },
                { text: "לעבור לאפשרות אחרת", nextSection: 8, icon: "other_option.png" }
            ]
        },
        10: {
            question: "טורבינות רוח",
            content: "מאחר ובחרתם בטורבינות רוח, יש לזכור את אי-הסדירות של הרוח, שיכולה להוביל לשינויים בייצור החשמל. מערכות אגירת אנרגיה, כמו סוללות, יכולות לעזור להתמודד עם בעיה זו, אך הן עלולות להיות יקרות ודורשות שיפורים טכנולוגיים נוספים. בנוסף, יש לשקול את ההתקבלות של מערכות כאלה על ידי הקהילה ואת החסמים הרגולטוריים הפוטנציאליים לפרויקטים חדשים של חוות רוח.",
            question2: "האם ברצונך לאשר את הבחירה שלך או לעבור לאפשרות אחרת?",
            options: [
                { text: "לאשר את הבחירה בטורבינות רוח", nextSection: 15, icon: "רוח.png" },
                { text: "לעבור לאפשרות אחרת", nextSection: 8, icon: "other_option.png" }
            ]
        },
        11: {
            question: "הידרו-אלקטרי",
            content: "מאחר ובחרתם באנרגיה הידרו-אלקטרית, חשוב לשקול את ההשפעות הסביבתיות ארוכות הטווח, כמו הצטברות משקעים ושינויים בהרכב ובאיכות המים. פרויקטים גדולים של תחנות הידרו-אלקטריות עלולים גם להיות שנויים במחלוקת ולעורר התנגדות מקהילות מקומיות וקבוצות סביבתיות. למרות האתגרים הללו, כוח הידרו-אלקטרי נותר מקור משמעותי ואמין לאנרגיה מתחדשת.",
            question2: "האם ברצונך לאשר את הבחירה שלך או לעבור לאפשרות אחרת?",
            options: [
                { text: "לאשר את הבחירה באנרגיה הידרו-אלקטרית", nextSection: 15, icon: "הידרו.png" },
                { text: "לעבור לאפשרות אחרת", nextSection: 8, icon: "other_option.png" }
            ]
        },
        12: {
            question: "פוטו-וולטאי",
            content: "מאחר ובחרתם באנרגיה פוטו-וולטאית, חשוב לחשוב על יעילות הפאנלים הסולאריים והעלויות הקשורות למערכות אגירת אנרגיה כדי להבטיח אספקת חשמל יציבה. ייצור הפאנלים הסולאריים והפסולת הנובעת מכך - גם הם בעלי השפעות סביבתיות שליליות, כולל שימוש בחומרים רעילים. למרות זאת, כוח סולארי הוא חלק חיוני מאסטרטגיה מגוונת של אנרגיה מתחדשת.",
            question2: "האם ברצונך לאשר את הבחירה שלך או לעבור לאפשרות אחרת?",
            options: [
                { text: "לאשר את הבחירה באנרגיה פוטו-וולטאית", nextSection: 15, icon: "פוטו-וולטאית.png" },
                { text: "לעבור לאפשרות אחרת", nextSection: 8, icon: "other_option.png" }
            ]
        },
        13: {
            question: "תרמו-סולארי",
            content: "מאחר ובחרתם באנרגיה תרמו-סולארית, חשוב לשקול את השימוש הנדרש במערכת מסוג זה במים לקירור - במיוחד באזורים יבשים כמו ישראל, שם המים הם משאב יקר ערך. ההשפעה הסביבתית של השימוש בקרקע והעלויות הגבוהות ההתחלתיות הן גורמים חשובים גם כן. עם זאת, טכנולוגיית תרמו-סולארי יכולה לאפשר אספקת כוח יציבה, מה שהופך אותה לתוספת חשובה לתמהיל האנרגיה.",
            question2: "האם ברצונך לאשר את הבחירה שלך או לעבור לאפשרות אחרת?",
            options: [
                { text: "לאשר את הבחירה באנרגיה תרמו-סולארית", nextSection: 15, icon: "תרמו-סולארי.png" },
                { text: "לעבור לאפשרות אחרת", nextSection: 8, icon: "other_option.png" }
            ]
        },
        14: {
            question: "גרעיני",
            content: "מאחר ובחרתם באנרגיה גרעינית, חשוב לשקול את העלויות הגבוהות ההתחלתיות ואת פרקי הזמן הארוכים הדרושים לבניית תחנות חדשות מסוג זה. בעיות של ניהול פסולת רדיואקטיבית ותפיסת הציבור של בטיחות גרעינית - גם הם אתגרים משמעותיים. למרות החששות הללו, כוח גרעיני מציע פתרון אנרגטי בעל תפוקה גבוהה ודלת פחמן.",
            question2: "האם ברצונך לאשר את הבחירה שלך או לעבור לאפשרות אחרת?",
            options: [
                { text: "לאשר את הבחירה באנרגיה גרעינית", nextSection: 15, icon: "גרעיני.png" },
                { text: "לעבור לאפשרות אחרת", nextSection: 8, icon: "other_option.png" }
            ]
        },
        15: {
            question: "החלטה סופית",
            content: "תודה על תשובותיכם! כפי שראיתם, לכל סוג של תחנת כוח יש יתרונות וחסרונות משלו. מורכבות זו מדגישה את החשיבות של הבנת תהליכי ייצור האנרגיה בצורה מקיפה.\n\הצטרפו אלינו לתכנית \"בשביל האנרגיה\" והמשיכו לחקור עם תלמידיכם!",
            type: "final"
        }
    },
    currentSection: 1
};


function displayQuestion() {
    const section = questionnaire.sections[questionnaire.currentSection];
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');

    // Clear previous content with a fade-out effect
    fadeOut(questionContainer);
    fadeOut(optionsContainer);

    setTimeout(() => {
        questionContainer.innerHTML = '';
        optionsContainer.innerHTML = '';

        // Display options
        if (section.type === "circle") {
            optionsContainer.className = "circle-container";
            const dottedCircle = document.createElement('div');
            dottedCircle.className = 'dotted-circle';
            optionsContainer.appendChild(dottedCircle);

            section.options.forEach((option, index) => {
                const button = document.createElement('div');
                button.className = "circle-option";
                const angle = (index * 60) - 90; // Start from the top (90 degrees)
                const radius = 180; // Adjust this value to change the size of the circle
                const x = Math.cos(angle * Math.PI / 180) * radius;
                const y = Math.sin(angle * Math.PI / 180) * radius;
                button.style.transform = `translate(${x}px, ${y}px)`;
                button.innerHTML = `
                    <img src="${option.icon}" alt="${option.text}">
                    <span>${option.text}</span>
                `;
                button.onclick = () => selectOption(option.nextSection);
                optionsContainer.appendChild(button);
            });
        } else if (section.type === "final") {
            const finalContent = document.createElement('div');
            finalContent.className = 'final-section';
            finalContent.innerHTML = `
                <p>${section.content}</p>
            `;
            questionContainer.appendChild(finalContent);

            const startOverButton = document.createElement('button');
            startOverButton.className = 'button';
            startOverButton.textContent = 'התחילו מחדש';
            startOverButton.onclick = () => selectOption(1);
            optionsContainer.appendChild(startOverButton);
        } else {
            const sectionTitle = document.createElement('h2');
            sectionTitle.className = 'energy-type-title';
            sectionTitle.textContent = section.question;
            questionContainer.appendChild(sectionTitle);

            if (section.content) {
                const contentDiv = document.createElement('div');
                contentDiv.className = 'description-section';
                
                if (questionnaire.currentSection >= 2 && questionnaire.currentSection <= 7) {
                    const contentParts = section.content.split('יחד עם זאת...');
                    contentDiv.innerHTML = `
                       <p><strong>בחירה מצוינת!</strong></p>
                        <p>${contentParts[0].replace('בחירה מצוינת!', '')}</p>
                        <p><strong>יחד עם זאת...</strong></p>
                        <p>${contentParts[1]}</p>
                    `;
                } else {
                    contentDiv.innerHTML = `<p>${section.content}</p>`;
                }
                
                questionContainer.appendChild(contentDiv);
            }

            if (section.question2) {
                const question2Header = document.createElement('h3');
                question2Header.textContent = section.question2;
                question2Header.style.textAlign = 'right';
                questionContainer.appendChild(question2Header);
            }

            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'button-container';

            section.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.className = 'button';
                button.innerHTML = `<img src="${option.icon}" alt="${option.text}"> ${option.text}`;
                button.onclick = () => {
                    button.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        button.style.transform = 'scale(1)';
                        selectOption(option.nextSection);
                    }, 100);
                };
                buttonContainer.appendChild(button);
            });

            optionsContainer.appendChild(buttonContainer);
        }

        // Fade in the new content
        fadeIn(questionContainer);
        fadeIn(optionsContainer);
    }, 300); // Wait for fade-out to complete
}

function selectOption(nextSection) {
    questionnaire.currentSection = nextSection;
    displayQuestion();
}

function fadeOut(element) {
    element.style.opacity = '0';
    element.style.transition = 'opacity 300ms ease-in';
}

function fadeIn(element) {
    element.style.opacity = '1';
    element.style.transition = 'opacity 300ms ease-in';
}

window.onload = displayQuestion;
