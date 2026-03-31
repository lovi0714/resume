webpackHotUpdate_N_E("pages/index",{

/***/ "./payload/project.ts":
/*!****************************!*\
  !*** ./payload/project.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var project = {
  disable: false,
  list: [{
    title: '업무 보고 자동화 및 도메인 지식 축적 체계 구축',
    startedAt: '2026-03',
    where: '코리아엑스퍼트(주)',
    descriptions: [{
      content: '업무 보고 프로세스 자동화',
      weight: 'MEDIUM',
      descriptions: [{
        content: '기존 PPT 기반 업무 보고 및 수작업 취합 프로세스를 Notion 자동화로 전환 (대상 약 25명)'
      }, {
        content: '팀원 PPT를 개별 열어 복사·정리하던 관리자 취합 작업을 제거하고, Notion 자동 취합 + 코멘트 방식으로 개선'
      }, {
        content: 'Claude API를 활용하여 보고 초안 및 취합 초안 자동 생성 기능 구현'
      }]
    }, {
      content: '도메인 지식 축적 체계 구축',
      weight: 'MEDIUM',
      descriptions: [{
        content: '축적된 업무 데이터를 기반으로 Claude API를 활용한 도메인 지식 초안 자동 생성 체계 구축'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: '관리자 수작업 취합 업무 제거 — Notion 자동 취합으로 전환'
      }, {
        content: 'Claude API 연동으로 보고·취합·지식 초안 작성 자동화'
      }, {
        content: '현재 1개 팀 대상 시범 운영 중'
      }]
    }]
  }, {
    title: '롯데손해보험 고지정보 자동입력',
    startedAt: '2026-01',
    endedAt: '2026-02',
    where: '롯데손해보험',
    descriptions: [{
      content: '고지정보 자동입력 기능 개발',
      weight: 'MEDIUM',
      descriptions: [{
        content: '질병별 공통질문·추가질문으로 구성된 고지정보를 수기 입력에서 사고이력 데이터 기반 자동입력으로 전환하는 기능 개발'
      }, {
        content: '현업과 직접 커뮤니케이션하며 요구사항 정리 및 기능 반영'
      }, {
        content: '개발부터 테스트, 운영 반영까지 단독 수행'
      }]
    }, {
      content: '공통 질문 응답에 따른 추가 질문 제어 및 유효성 검증 로직 개발',
      weight: 'MEDIUM',
      descriptions: [{
        content: '공통 질문 응답에 따라 추가 질문을 동적으로 제어'
      }, {
        content: '유효성 검증을 통해 알맞은 답변만 입력되도록 처리'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: '자동입력 도입으로 현업 건당 입력 시간 50% 이상 단축'
      }, {
        content: '기존 잘못된 입력으로 인한 심사 반려 케이스를 유효성 검증 로직으로 차단'
      }]
    }]
  }, {
    title: 'DB생명 질병심사 기능 개선',
    startedAt: '2025-09',
    endedAt: '2025-12',
    where: 'DB생명',
    descriptions: [{
      content: '질병심사 기능 대응 개발',
      weight: 'MEDIUM',
      descriptions: [{
        content: '기존 2,400만 건 테이블에 신규 상품 데이터 4,500만 건 추가 필요 — 단일 테이블 구조의 한계를 판단하여 LIST 파티션 재설계 제안 및 적용'
      }, {
        content: '상품 코드 기반 LIST 파티션으로 분리하여, 기존 소스 및 쿼리 수정을 최소화하면서 구조 전환'
      }, {
        content: '총 6,900만 건 규모의 데이터 정합성 검증 수행'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: '6,900만 건 규모 테이블을 상품 단위로 분리하여 유지보수성 확보'
      }, {
        content: '신규 상품 추가 시 파티션 추가만으로 대응 가능한 확장 구조 확보'
      }, {
        content: '기존 쿼리 변경 없이 구조 전환 완료'
      }]
    }]
  }, {
    title: 'KB Life 질병심사 기능 개선',
    startedAt: '2025-07',
    endedAt: '2025-08',
    where: 'KB Life',
    descriptions: [{
      content: '질병심사 기능 개발',
      weight: 'MEDIUM',
      descriptions: [{
        content: '신규 건강 상품 출시에 따라 5년/10년 시나리오 판을 분리하여 질병심사 기능 개발'
      }, {
        content: '신정원 데이터 및 기존 심사 소스 분석부터 시작하여, 기존 구조를 재활용한 설계로 개발 기간 단축'
      }, {
        content: '개발부터 운영 반영까지 전 과정 단독 수행'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: '사전 도메인 지식 없이 투입되어, 소스 분석부터 운영 반영까지 2주 내 완료 — 상품 출시 일정 납기 준수'
      }]
    }]
  }, {
    title: '하나생명 제3보험 시스템 구축 (청약심사 자동화)',
    startedAt: '2024-08',
    endedAt: '2025-06',
    where: '하나생명',
    descriptions: [{
      content: '콘텐츠 배포 기능',
      weight: 'MEDIUM',
      descriptions: [{
        content: '개발계 → 테스트계 → 운영계 데이터 배포 기능 개선'
      }, {
        content: '선택적 배포가 가능하도록 배포 프로세스 개선'
      }, {
        content: '배포 파일 다운로드 / 업로드 기능 구현'
      }, {
        content: '간단한 결재 및 예약 배포 기능 개발'
      }, {
        content: '대용량 데이터 처리 성능 개선'
      }, {
        content: '단건 SELECT 방식 → 1,000건 단위 일괄 처리 방식으로 개선'
      }, {
        content: '화면에서 각 배포 대상 컨텐츠를 불러오는 부분을 비동기로 처리하여 초기 로딩 속도 개선'
      }]
    }, {
      content: '게시판 / 통계 화면',
      weight: 'MEDIUM',
      descriptions: [{
        content: '요구사항에 맞춰 기존 게시판 화면 커스터마이징'
      }, {
        content: '심사 결과를 각 특성에 맞게 총 6개 화면으로 구성하여 제공'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: 'DB 부하 감소'
      }, {
        content: '데이터 조회 및 파일 생성 속도 개선'
      }, {
        content: '운영 환경에서 안정적인 대용량 배포 체계 구축'
      }, {
        content: 'DBA 요청 없이, 운영 중 변경 사항 반영 가능'
      }]
    }]
  }, {
    title: 'The KE 프로파일 및 장비 관리 시스템',
    startedAt: '2024-03',
    endedAt: '2024-07',
    where: '코리아엑스퍼트(주)',
    descriptions: [{
      content: '사내 인력·장비 관리 시스템 구축',
      weight: 'MEDIUM',
      descriptions: [{
        content: '이력서 수정 승인 페이지 개발'
      }, {
        content: '관리자 메뉴 개발 및 사용자 권한 관리'
      }, {
        content: '로그 관리 (AOP, Logback 활용)'
      }, {
        content: '실시간 서버 자원 모니터링'
      }, {
        content: 'Docker Compose 기반 개발/운영 환경 구축'
      }, {
        content: 'Jenkins 자동 빌드·배포 환경 구성'
      }]
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (project);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGF5bG9hZC9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbInByb2plY3QiLCJkaXNhYmxlIiwibGlzdCIsInRpdGxlIiwic3RhcnRlZEF0Iiwid2hlcmUiLCJkZXNjcmlwdGlvbnMiLCJjb250ZW50Iiwid2VpZ2h0IiwiZW5kZWRBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUEsa0RBQU1BLE9BQXlCLEdBQUc7QUFDaENDLFNBQU8sRUFBRSxLQUR1QjtBQUVoQ0MsTUFBSSxFQUFFLENBQ0o7QUFDRUMsU0FBSyxFQUFFLDZCQURUO0FBRUVDLGFBQVMsRUFBRSxTQUZiO0FBR0VDLFNBQUssRUFBRSxZQUhUO0FBSUVDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUUsZ0JBRFg7QUFFRUMsWUFBTSxFQUFFLFFBRlY7QUFHRUYsa0JBQVksRUFBRSxDQUNaO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BRFksRUFFWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUZZLEVBR1o7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FIWTtBQUhoQixLQURZLEVBVVo7QUFDRUEsYUFBTyxFQUFFLGlCQURYO0FBRUVDLFlBQU0sRUFBRSxRQUZWO0FBR0VGLGtCQUFZLEVBQUUsQ0FDWjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQURZO0FBSGhCLEtBVlksRUFpQlo7QUFDRUEsYUFBTyxFQUFFLElBRFg7QUFFRUMsWUFBTSxFQUFFLE1BRlY7QUFHRUYsa0JBQVksRUFBRSxDQUNaO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BRFksRUFFWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUZZLEVBR1o7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FIWTtBQUhoQixLQWpCWTtBQUpoQixHQURJLEVBaUNKO0FBQ0VKLFNBQUssRUFBRSxrQkFEVDtBQUVFQyxhQUFTLEVBQUUsU0FGYjtBQUdFSyxXQUFPLEVBQUUsU0FIWDtBQUlFSixTQUFLLEVBQUUsUUFKVDtBQUtF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LEVBQUU7QUFBWCxPQURZLEVBRVo7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FGWTtBQUhoQixLQWRZLEVBc0JaO0FBQ0VBLGFBQU8sRUFBRSxJQURYO0FBRUVDLFlBQU0sRUFBRSxNQUZWO0FBR0VGLGtCQUFZLEVBQUUsQ0FDWjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQURZLEVBRVo7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FGWSxFQUdaO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BSFksRUFJWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUpZO0FBSGhCLEtBdEJZO0FBTGhCLEdBcEhJLEVBMkpKO0FBQ0VKLFNBQUssRUFBRSx5QkFEVDtBQUVFQyxhQUFTLEVBQUUsU0FGYjtBQUdFSyxXQUFPLEVBQUUsU0FIWDtBQUlFSixTQUFLLEVBQUUsWUFKVDtBQUtFQyxnQkFBWSxFQUFFLENBQ1o7QUFDRUMsYUFBTyxFQUFFLG9CQURYO0FBRUVDLFlBQU0sRUFBRSxRQUZWO0FBR0VGLGtCQUFZLEVBQUUsQ0FDWjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQURZLEVBRVo7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FGWSxFQUdaO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BSFksRUFJWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUpZLEVBS1o7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FMWSxFQU1aO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BTlk7QUFIaEIsS0FEWTtBQUxoQixHQTNKSTtBQUYwQixDQUFsQztBQW9MZVAsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjU1OTZlOGFlYWRmNThlZTIyMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElQcm9qZWN0IH0gZnJvbSAnLi4vY29tcG9uZW50L3Byb2plY3QvSVByb2plY3QnO1xyXG5cclxuY29uc3QgcHJvamVjdDogSVByb2plY3QuUGF5bG9hZCA9IHtcclxuICBkaXNhYmxlOiBmYWxzZSxcclxuICBsaXN0OiBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn7JeF66y0IOuztOqzoCDsnpDrj5ntmZQg67CPIOuPhOuplOyduCDsp4Dsi50g7LaV7KCBIOyytOqzhCDqtazstpUnLFxyXG4gICAgICBzdGFydGVkQXQ6ICcyMDI2LTAzJyxcclxuICAgICAgd2hlcmU6ICfsvZTrpqzslYTsl5HsiqTtjbztirgo7KO8KScsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfsl4XrrLQg67O06rOgIO2UhOuhnOyEuOyKpCDsnpDrj5ntmZQnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnTUVESVVNJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfquLDsobQgUFBUIOq4sOuwmCDsl4XrrLQg67O06rOgIOuwjyDsiJjsnpHsl4Ug7Leo7ZWpIO2UhOuhnOyEuOyKpOulvCBOb3Rpb24g7J6Q64+Z7ZmU66GcIOyghO2ZmCAo64yA7IOBIOyVvSAyNeuqhSknIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+2MgOybkCBQUFTrpbwg6rCc67OEIOyXtOyWtCDrs7XsgqzCt+ygleumrO2VmOuNmCDqtIDrpqzsnpAg7Leo7ZWpIOyekeyXheydhCDsoJzqsbDtlZjqs6AsIE5vdGlvbiDsnpDrj5kg7Leo7ZWpICsg7L2U66mY7Yq4IOuwqeyLneycvOuhnCDqsJzshKAnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ0NsYXVkZSBBUEnrpbwg7Zmc7Jqp7ZWY7JesIOuztOqzoCDstIjslYgg67CPIOy3qO2VqSDstIjslYgg7J6Q64+ZIOyDneyEsSDquLDriqUg6rWs7ZiEJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfrj4TrqZTsnbgg7KeA7IudIOy2leyggSDssrTqs4Qg6rWs7LaVJyxcclxuICAgICAgICAgIHdlaWdodDogJ01FRElVTScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7LaV7KCB65CcIOyXheustCDrjbDsnbTthLDrpbwg6riw67CY7Jy866GcIENsYXVkZSBBUEnrpbwg7Zmc7Jqp7ZWcIOuPhOuplOyduCDsp4Dsi50g7LSI7JWIIOyekOuPmSDsg53shLEg7LK06rOEIOq1rOy2lScgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7ISx6rO8JyxcclxuICAgICAgICAgIHdlaWdodDogJ0JPTEQnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+q0gOumrOyekCDsiJjsnpHsl4Ug7Leo7ZWpIOyXheustCDsoJzqsbAg4oCUIE5vdGlvbiDsnpDrj5kg7Leo7ZWp7Jy866GcIOyghO2ZmCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAnQ2xhdWRlIEFQSSDsl7Drj5nsnLzroZwg67O06rOgwrfst6jtlanCt+yngOyLnSDstIjslYgg7J6R7ISxIOyekOuPme2ZlCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7ZiE7J6sIDHqsJwg7YyAIOuMgOyDgSDsi5zrspQg7Jq07JiBIOykkScgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn66Gv642w7IaQ7ZW067O07ZeYIOqzoOyngOygleuztCDsnpDrj5nsnoXroKUnLFxyXG4gICAgICBzdGFydGVkQXQ6ICcyMDI2LTAxJyxcclxuICAgICAgZW5kZWRBdDogJzIwMjYtMDInLFxyXG4gICAgICB3aGVyZTogJ+uhr+uNsOyGkO2VtOuztO2XmCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfqs6Dsp4DsoJXrs7Qg7J6Q64+Z7J6F66ClIOq4sOuKpSDqsJzrsJwnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnTUVESVVNJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfsp4jrs5Hrs4Qg6rO17Ya17KeI66y4wrfstpTqsIDsp4jrrLjsnLzroZwg6rWs7ISx65CcIOqzoOyngOygleuztOulvCDsiJjquLAg7J6F66Cl7JeQ7IScIOyCrOqzoOydtOugpSDrjbDsnbTthLAg6riw67CYIOyekOuPmeyeheugpeycvOuhnCDsoITtmZjtlZjripQg6riw64qlIOqwnOuwnCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7ZiE7JeF6rO8IOyngeygkSDsu6TrrqTri4jsvIDsnbTshZjtlZjrqbAg7JqU6rWs7IKs7ZWtIOygleumrCDrsI8g6riw64qlIOuwmOyYgScgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn6rCc67Cc67aA7YSwIO2FjOyKpO2KuCwg7Jq07JiBIOuwmOyYgeq5jOyngCDri6jrj4Ug7IiY7ZaJJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfqs7XthrUg7KeI66y4IOydkeuLteyXkCDrlLDrpbgg7LaU6rCAIOyniOusuCDsoJzslrQg67CPIOycoO2aqOyEsSDqsoDspp0g66Gc7KeBIOqwnOuwnCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdNRURJVU0nLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+qzte2GtSDsp4jrrLgg7J2R64u17JeQIOuUsOudvCDstpTqsIAg7KeI66y47J2EIOuPmeyggeycvOuhnCDsoJzslrQnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+ycoO2aqOyEsSDqsoDspp3snYQg7Ya17ZW0IOyVjOunnuydgCDri7Xrs4Drp4wg7J6F66Cl65CY64+E66GdIOyymOumrCcgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7ISx6rO8JyxcclxuICAgICAgICAgIHdlaWdodDogJ0JPTEQnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+yekOuPmeyeheugpSDrj4TsnoXsnLzroZwg7ZiE7JeFIOqxtOuLuSDsnoXroKUg7Iuc6rCEIDUwJSDsnbTsg4Eg64uo7LaVJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfquLDsobQg7J6Y66q765CcIOyeheugpeycvOuhnCDsnbjtlZwg7Ius7IKsIOuwmOugpCDsvIDsnbTsiqTrpbwg7Jyg7Zqo7ISxIOqygOymnSDroZzsp4HsnLzroZwg7LCo64uoJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdEQuyDneuqhSDsp4jrs5Hsi6zsgqwg6riw64qlIOqwnOyEoCcsXHJcbiAgICAgIHN0YXJ0ZWRBdDogJzIwMjUtMDknLFxyXG4gICAgICBlbmRlZEF0OiAnMjAyNS0xMicsXHJcbiAgICAgIHdoZXJlOiAnRELsg53rqoUnLFxyXG4gICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7KeI67OR7Ius7IKsIOq4sOuKpSDrjIDsnZEg6rCc67CcJyxcclxuICAgICAgICAgIHdlaWdodDogJ01FRElVTScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn6riw7KG0IDIsNDAw66eMIOqxtCDthYzsnbTruJTsl5Ag7Iug6recIOyDge2SiCDrjbDsnbTthLAgNCw1MDDrp4wg6rG0IOy2lOqwgCDtlYTsmpQg4oCUIOuLqOydvCDthYzsnbTruJQg6rWs7KGw7J2YIO2VnOqzhOulvCDtjJDri6jtlZjsl6wgTElTVCDtjIzti7DshZgg7J6s7ISk6rOEIOygnOyViCDrsI8g7KCB7JqpJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfsg4Htkogg7L2U65OcIOq4sOuwmCBMSVNUIO2MjO2LsOyFmOycvOuhnCDrtoTrpqztlZjsl6wsIOq4sOyhtCDshozsiqQg67CPIOy/vOumrCDsiJjsoJXsnYQg7LWc7IaM7ZmU7ZWY66m07IScIOq1rOyhsCDsoITtmZgnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+y0nSA2LDkwMOunjCDqsbQg6rec66qo7J2YIOuNsOydtO2EsCDsoJXtlanshLEg6rKA7KadIOyImO2WiScgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7ISx6rO8JyxcclxuICAgICAgICAgIHdlaWdodDogJ0JPTEQnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJzYsOTAw66eMIOqxtCDqt5zrqqgg7YWM7J2067iU7J2EIOyDge2SiCDri6jsnITroZwg67aE66as7ZWY7JesIOycoOyngOuztOyImOyEsSDtmZXrs7QnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+yLoOq3nCDsg4Htkogg7LaU6rCAIOyLnCDtjIzti7DshZgg7LaU6rCA66eM7Jy866GcIOuMgOydkSDqsIDriqXtlZwg7ZmV7J6lIOq1rOyhsCDtmZXrs7QnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+q4sOyhtCDsv7zrpqwg67OA6rK9IOyXhuydtCDqtazsobAg7KCE7ZmYIOyZhOujjCcgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnS0IgTGlmZSDsp4jrs5Hsi6zsgqwg6riw64qlIOqwnOyEoCcsXHJcbiAgICAgIHN0YXJ0ZWRBdDogJzIwMjUtMDcnLFxyXG4gICAgICBlbmRlZEF0OiAnMjAyNS0wOCcsXHJcbiAgICAgIHdoZXJlOiAnS0IgTGlmZScsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfsp4jrs5Hsi6zsgqwg6riw64qlIOqwnOuwnCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdNRURJVU0nLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+yLoOq3nCDqsbTqsJUg7IOB7ZKIIOy2nOyLnOyXkCDrlLDrnbwgNeuFhC8xMOuFhCDsi5zrgpjrpqzsmKQg7YyQ7J2EIOu2hOumrO2VmOyXrCDsp4jrs5Hsi6zsgqwg6riw64qlIOqwnOuwnCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7Iug7KCV7JuQIOuNsOydtO2EsCDrsI8g6riw7KG0IOyLrOyCrCDshozsiqQg67aE7ISd67aA7YSwIOyLnOyeke2VmOyXrCwg6riw7KG0IOq1rOyhsOulvCDsnqztmZzsmqntlZwg7ISk6rOE66GcIOqwnOuwnCDquLDqsIQg64uo7LaVJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfqsJzrsJzrtoDthLAg7Jq07JiBIOuwmOyYgeq5jOyngCDsoIQg6rO87KCVIOuLqOuPhSDsiJjtloknIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yEseqzvCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdCT0xEJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfsgqzsoIQg64+E66mU7J24IOyngOyLnSDsl4bsnbQg7Yis7J6F65CY7Ja0LCDshozsiqQg67aE7ISd67aA7YSwIOyatOyYgSDrsJjsmIHquYzsp4AgMuyjvCDrgrQg7JmE66OMIOKAlCDsg4Htkogg7Lac7IucIOydvOyglSDrgqnquLAg7KSA7IiYJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICftlZjrgpjsg53rqoUg7KCcM+uztO2XmCDsi5zsiqTthZwg6rWs7LaVICjssq3slb3si6zsgqwg7J6Q64+Z7ZmUKScsXHJcbiAgICAgIHN0YXJ0ZWRBdDogJzIwMjQtMDgnLFxyXG4gICAgICBlbmRlZEF0OiAnMjAyNS0wNicsXHJcbiAgICAgIHdoZXJlOiAn7ZWY64KY7IOd66qFJyxcclxuICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+y9mO2FkOy4oCDrsLDtj6wg6riw64qlJyxcclxuICAgICAgICAgIHdlaWdodDogJ01FRElVTScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn6rCc67Cc6rOEIOKGkiDthYzsiqTtirjqs4Qg4oaSIOyatOyYgeqzhCDrjbDsnbTthLAg67Cw7Y+sIOq4sOuKpSDqsJzshKAnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+yEoO2DneyggSDrsLDtj6zqsIAg6rCA64ql7ZWY64+E66GdIOuwsO2PrCDtlITroZzshLjsiqQg6rCc7ISgJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfrsLDtj6wg7YyM7J28IOuLpOyatOuhnOuTnCAvIOyXheuhnOuTnCDquLDriqUg6rWs7ZiEJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfqsITri6jtlZwg6rKw7J6sIOuwjyDsmIjslb0g67Cw7Y+sIOq4sOuKpSDqsJzrsJwnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+uMgOyaqeufiSDrjbDsnbTthLAg7LKY66asIOyEseuKpSDqsJzshKAnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+uLqOqxtCBTRUxFQ1Qg67Cp7IudIOKGkiAxLDAwMOqxtCDri6jsnIQg7J286rSEIOyymOumrCDrsKnsi53snLzroZwg6rCc7ISgJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICftmZTrqbTsl5DshJwg6rCBIOuwsO2PrCDrjIDsg4Eg7Luo7YWQ7Lig66W8IOu2iOufrOyYpOuKlCDrtoDrtoTsnYQg67mE64+Z6riw66GcIOyymOumrO2VmOyXrCDstIjquLAg66Gc65SpIOyGjeuPhCDqsJzshKAnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+qyjOyLnO2MkCAvIO2GteqzhCDtmZTrqbQnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnTUVESVVNJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfsmpTqtazsgqztla3sl5Ag66ee7LawIOq4sOyhtCDqsozsi5ztjJAg7ZmU66m0IOy7pOyKpO2EsOuniOydtOynlScgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7Ius7IKsIOqysOqzvOulvCDqsIEg7Yq57ISx7JeQIOunnuqyjCDstJ0gNuqwnCDtmZTrqbTsnLzroZwg6rWs7ISx7ZWY7JesIOygnOqztScgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7ISx6rO8JyxcclxuICAgICAgICAgIHdlaWdodDogJ0JPTEQnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ0RCIOu2gO2VmCDqsJDshownIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+uNsOydtO2EsCDsobDtmowg67CPIO2MjOydvCDsg53shLEg7IaN64+EIOqwnOyEoCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7Jq07JiBIO2ZmOqyveyXkOyEnCDslYjsoJXsoIHsnbgg64yA7Jqp65+JIOuwsO2PrCDssrTqs4Qg6rWs7LaVJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICdEQkEg7JqU7LKtIOyXhuydtCwg7Jq07JiBIOykkSDrs4Dqsr0g7IKs7ZWtIOuwmOyYgSDqsIDriqUnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ1RoZSBLRSDtlITroZztjIzsnbwg67CPIOyepeu5hCDqtIDrpqwg7Iuc7Iqk7YWcJyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyNC0wMycsXHJcbiAgICAgIGVuZGVkQXQ6ICcyMDI0LTA3JyxcclxuICAgICAgd2hlcmU6ICfsvZTrpqzslYTsl5HsiqTtjbztirgo7KO8KScsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfsgqzrgrQg7J2466ClwrfsnqXruYQg6rSA66asIOyLnOyKpO2FnCDqtazstpUnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnTUVESVVNJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfsnbTroKXshJwg7IiY7KCVIOyKueyduCDtjpjsnbTsp4Ag6rCc67CcJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfqtIDrpqzsnpAg66mU64m0IOqwnOuwnCDrsI8g7IKs7Jqp7J6QIOq2jO2VnCDqtIDrpqwnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+uhnOq3uCDqtIDrpqwgKEFPUCwgTG9nYmFjayDtmZzsmqkpJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfsi6Tsi5zqsIQg7ISc67KEIOyekOybkCDrqqjri4jthLDrp4EnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ0RvY2tlciBDb21wb3NlIOq4sOuwmCDqsJzrsJwv7Jq07JiBIO2ZmOqyvSDqtazstpUnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ0plbmtpbnMg7J6Q64+ZIOu5jOuTnMK367Cw7Y+sIO2ZmOqyvSDqtazshLEnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9