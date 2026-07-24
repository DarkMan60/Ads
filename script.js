const tg = window.Telegram.WebApp;

tg.expand();

const AdController = window.Adsgram.init({
    blockId: "39404",
    debug: true
});

document.getElementById("watchAd").addEventListener("click", async () => {

    document.getElementById("status").innerText = "جاري تحميل الإعلان...";

    try {

        const result = await AdController.show();

        document.getElementById("status").innerText =
            "✅ انتهى الإعلان";

        console.log(result);

    } catch (e) {

        document.getElementById("status").innerText =
            "❌ لم يتم عرض الإعلان";

        console.log(e);

    }

});
